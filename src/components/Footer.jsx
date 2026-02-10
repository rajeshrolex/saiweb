import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                            SVPfarm's
                        </h3>
                        <p className="text-gray-400">
                            Building digital products that grow your business
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#web-dev" className="text-gray-400 hover:text-primary-400 transition-colors">Web Development</a></li>
                            <li><a href="#app-dev" className="text-gray-400 hover:text-primary-400 transition-colors">App Development</a></li>
                            <li><a href="#software-dev" className="text-gray-400 hover:text-primary-400 transition-colors">Software Development</a></li>
                            <li><a href="#seo" className="text-gray-400 hover:text-primary-400 transition-colors">SEO Services</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2026 SVPfarm's. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
