import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of background images - using local images from public folder
    const backgroundImages = [
        '/hero-bg-1.png', // ChatGPT/AI Generated Image 1
        '/hero-bg-2.png'  // ChatGPT/AI Generated Image 2
    ];

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [backgroundImages.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                {/* Auto-scrolling background images */}
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text animate-fade-in-up">
                    <h1 className="hero-headline">
                        Web, App & Software Development That Grows Your Business
                    </h1>
                    <p className="hero-subtext">
                        We design and develop fast, secure, and scalable digital products — from websites to custom software — built for real business needs.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Get Started</a>
                        <a href="#contact" className="btn btn-secondary">Talk to Us</a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in">
                    <div className="floating-card card-1 animate-float">
                        <div className="code-snippet">
                            <div className="code-line"></div>
                            <div className="code-line short"></div>
                            <div className="code-line"></div>
                        </div>
                    </div>
                    <div className="floating-card card-2 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="icon-grid">
                            <div className="icon-dot"></div>
                            <div className="icon-dot"></div>
                            <div className="icon-dot"></div>
                            <div className="icon-dot"></div>
                        </div>
                    </div>
                    <div className="floating-card card-3 animate-float" style={{ animationDelay: '2s' }}>
                        <div className="chart-bars">
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar" style={{ height: '40%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
