# We Can Do It! Lawn & Landscape LLC - Local Business Website

A modern, responsive, high-converting MERN-style web application built for a landscaping company in Summerville, SC.

This project features:
1. **React Frontend (Vite)**: Clean responsive components, smooth scrolling, real-time quote form validation, and interactive Before/After project toggles.
2. **Node.js/Express Backend**: A lightweight web server that handles quote form submissions, validates data, and saves them to a local JSON file (`submissions.json`).

---

## Folder Structure

```
we-can-do-it-lawn-care/
├── package.json               # Root config to orchestrate both folders
├── README.md                  # Instructions (this file)
├── backend/                   # Node/Express API
│   ├── package.json           # Backend dependencies
│   ├── server.js              # Express server code & form endpoint
│   └── submissions.json       # Local database of form submissions
└── frontend/                  # React App
    ├── index.html             # HTML Shell with SEO metadata & fonts
    ├── package.json           # Frontend dependencies
    ├── src/
    │   ├── App.jsx            # Assembles sections
    │   ├── main.jsx           # Mounts React
    │   ├── index.css          # Color theme variables & global styles
    │   ├── App.css            # Responsive layout & custom animations
    │   └── components/        # Webpage section components
```

---

## Local Setup & Run Instructions

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Step 1: Install Dependencies
Open your terminal in the root directory (`we-can-do-it-lawn-care/`) and run:
```bash
npm run install:all
```
*This helper script automatically runs `npm install` in the root, frontend, and backend folders to install everything at once.*

### Step 2: Start the Servers
In the same root directory, run:
```bash
npm run dev
```
*This command starts both the Express backend and the Vite React frontend concurrently:*
- **Frontend** runs at: `http://localhost:5173/` (or similar)
- **Backend API** runs at: `http://localhost:5000/`

Open the frontend URL in your browser to interact with the website!

---

## How the Contact Form Works

1. **User Fills Form**: The user enters their Name, Phone, Email, Service Needed, Property Address, and a short message in the `ContactForm.jsx` component.
2. **React Validates**: The frontend checks that all required fields are filled, emails are formatted correctly, and phone numbers contain at least 10 digits. Input fields highlight red (invalid) or green (valid) dynamically.
3. **API POST Request**: Upon clicking submit, React fires a `POST` request containing a JSON body to the backend endpoint: `http://localhost:5000/api/quote`.
4. **Express Validates & Saves**:
   - The server validates the inputs to ensure they are complete and safe.
   - It assigns a unique ID and a timestamp to the submission.
   - It appends the submission object to `backend/submissions.json`.
5. **Success State**: The frontend receives a `201 Created` JSON response, disables the loading state, and overlays a green checkmark success screen.

---

## Adding Email Notifications in the Future

The backend has been structured so you can easily replace the console logging logic with a mail client when you are ready for production. 

To send email notifications (e.g., using `nodemailer`), open [backend/server.js](file:///C:/Users/B/.gemini/antigravity/scratch/we-can-do-it-lawn-care/backend/server.js) and update the `/api/quote` route near the end of the try block:

```javascript
// REPLACE THIS:
console.log(`[Quote Submission] Successfully saved quote for ${name} (${email})`);

// WITH AN EMAIL SENDER LIKE NODEMAILER:
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-business-email@gmail.com',
    pass: 'your-app-password'
  }
});

const mailOptions = {
  from: 'your-business-email@gmail.com',
  to: 'owner-email@wecandoitlawn.com',
  subject: `New Lawn Quote Request: ${service}`,
  text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nMessage: ${message}`
};

await transporter.sendMail(mailOptions);
*/
```
