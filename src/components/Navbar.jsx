import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Products',
            href: '#',
            submenu: [
                { name: 'HenCafe', href: '/products/hencafe' }
            ]
        },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${isScrolled ? 'shadow-md h-16' : 'h-20'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full relative">
                    {/* Logo on the left */}
                    <Link to="/" className="text-2xl font-black text-primary-600 tracking-tight whitespace-nowrap z-10">
                        SVPfarm's
                    </Link>

                    {/* Centered Desktop Navigation */}
                    <div className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center">
                        <ul className="flex items-center space-x-10">
                            {navLinks.map((link, index) => (
                                <li key={index} className="relative group">
                                    {link.submenu ? (
                                        <>
                                            <button
                                                className="flex items-center gap-1 font-bold text-gray-600 hover:text-primary-600 transition-colors text-sm tracking-wide py-2"
                                                onMouseEnter={() => setActiveDropdown(index)}
                                            >
                                                {link.name}
                                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div
                                                className={`absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-300 ${activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                {link.submenu.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={sub.href}
                                                        className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                                        onClick={handleLinkClick}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="font-bold text-gray-600 hover:text-primary-600 transition-colors text-sm tracking-wide"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Button on the right */}
                    <div className="hidden md:flex items-center z-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-200 hover:shadow-primary-300 transition-all duration-300 active:scale-95"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden bg-white border-b border-gray-100 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}>
                    <ul className="py-6 space-y-1">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {link.submenu ? (
                                    <div className="space-y-1">
                                        <button
                                            className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-bold hover:bg-gray-50 rounded-xl transition-all"
                                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                        >
                                            {link.name}
                                            <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`pl-6 overflow-hidden transition-all duration-300 ${activeDropdown === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {link.submenu.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={sub.href}
                                                    className="block px-4 py-3 text-gray-600 font-semibold hover:text-primary-600 rounded-xl transition-all"
                                                    onClick={handleLinkClick}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="block px-4 py-3 text-gray-800 font-bold hover:bg-gray-50 hover:text-primary-600 rounded-xl transition-all"
                                        onClick={handleLinkClick}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="px-4 pt-4 pb-2">
                            <Link
                                to="/contact"
                                className="block w-full text-center px-6 py-4 rounded-2xl text-base font-black text-white bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-100 transition-all"
                                onClick={handleLinkClick}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
