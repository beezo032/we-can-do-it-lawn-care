import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <ServiceArea />
        <ContactForm />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
