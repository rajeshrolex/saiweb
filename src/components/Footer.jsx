import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-brand">SVPfarm's</h3>
                        <p className="footer-tagline">
                            Building digital products that grow your business
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#web-dev">Web Development</a></li>
                            <li><a href="#app-dev">App Development</a></li>
                            <li><a href="#software-dev">Software Development</a></li>
                            <li><a href="#seo">SEO Services</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter</a>
                            <a href="#" className="social-link">GitHub</a>
                            <a href="#" className="social-link">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 SVPfarm's. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
