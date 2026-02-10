import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Projects from './components/Projects';
import About from './components/About';
import ServicesDetail from './components/ServicesDetail';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <ServicesOverview />
    <Projects />
    <About />
    <ServicesDetail />
    <HowWeWork />
    <WhyChooseUs />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
