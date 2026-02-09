import React from 'react';
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <Projects />
      <About />
      <ServicesDetail />
      <HowWeWork />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
