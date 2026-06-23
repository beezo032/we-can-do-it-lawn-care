import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ensure submissions.json exists and is valid
async function initializeDb() {
  try {
    await fs.access(SUBMISSIONS_FILE);
  } catch (err) {
    // File doesn't exist, create it with an empty array
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

// POST endpoint for quote submissions
app.post('/api/quote', async (req, res) => {
  try {
    const { name, phone, email, service, address, message } = req.body;

    // Validation
    if (!name || !phone || !email || !service || !address) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Phone, Email, Service, and Address).'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Prepare submission object
    const newSubmission = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      name,
      phone,
      email,
      service,
      address,
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    // Read current database
    await initializeDb();
    const fileContent = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    let submissions = [];
    try {
      submissions = JSON.parse(fileContent);
      if (!Array.isArray(submissions)) {
        submissions = [];
      }
    } catch (parseError) {
      submissions = [];
    }

    // Save submission
    submissions.push(newSubmission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');

    console.log(`[Quote Submission] Successfully saved quote for ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your quote request has been received. We will contact you shortly.',
      submissionId: newSubmission.id
    });
  } catch (error) {
    console.error('Error handling quote submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred. Please try again or call us directly.'
    });
  }
});

// GET endpoint to retrieve quotes (for demonstration/admin purposes)
app.get('/api/quotes', async (req, res) => {
  try {
    await initializeDb();
    const fileContent = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    const submissions = JSON.parse(fileContent);
    return res.json({ success: true, count: submissions.length, data: submissions });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return res.status(500).json({ success: false, error: 'Could not fetch quotes.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// Start the server
app.listen(PORT, async () => {
  await initializeDb();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Submissions database: ${SUBMISSIONS_FILE}`);
});
