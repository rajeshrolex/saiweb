import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text animate-fade-in-up">
                        <h2>About Us</h2>
                        <p className="about-highlight">
                            We help businesses turn ideas into reliable digital products.
                        </p>
                        <p>
                            Our focus is simple — clean design, efficient code, and scalable solutions.
                        </p>
                        <p>
                            No unnecessary features. No shortcuts. Just software that works and grows with your business.
                        </p>
                    </div>

                    <div className="about-visual animate-fade-in">
                        <div className="about-stats">
                            <div className="stat-card glass">
                                <div className="stat-number">100+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-card glass">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-card glass">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
