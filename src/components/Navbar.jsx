import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="navbar-brand">
                    <span className="brand-text">SVPfarm's</span>
                </a>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="nav-cta-mobile">
                        <a href="#contact" className="btn btn-primary btn-sm" onClick={handleLinkClick}>
                            Get Started
                        </a>
                    </li>
                </ul>

                <a href="#contact" className="btn btn-primary btn-sm nav-cta-desktop">
                    Get Started
                </a>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
