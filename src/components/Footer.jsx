import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from './Icons';

const Footer = () => {
    const socialIcons = {
        LinkedIn: <LinkedinIcon className="w-5 h-5" />,
        Twitter: <TwitterIcon className="w-5 h-5" />,
        GitHub: <GithubIcon className="w-5 h-5" />,
        Instagram: <InstagramIcon className="w-5 h-5" />
    };

    return (
        <footer className="bg-gray-950 text-white py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-200 group-hover:scale-105 transition-transform duration-300">
                                <span className="font-bold text-white text-xl">M</span>
                            </div>
                            <span className="font-black text-2xl tracking-tight text-white">
                                MetaMatrix<span className="text-primary-500">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-lg font-medium">
                            The elite digital marketing agency engineered to dominate algorithms, capture audiences, and scale brands to the next echelon.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/meta_matrix_media?igsh=dnZqdW1wa3dlcWFp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all group">
                                <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-primary-600 px-2 py-1 rounded">Instagram</span>
                                <div className="text-gray-500 group-hover:text-white transition-colors">
                                    <InstagramIcon className="w-5 h-5" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-10 text-white">Navigation</h4>
                        <ul className="space-y-5">
                            {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-all flex items-center gap-3 group">
                                        <span className="w-2 h-2 rounded-full bg-primary-500 scale-0 group-hover:scale-100 transition-transform"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div>
                        <h4 className="text-xl font-bold mb-10 text-white">Reach Us</h4>
                        <ul className="space-y-8">
                            <li className="flex gap-4 font-medium">
                                <span className="text-primary-500 text-xl">📍</span>
                                <span className="text-gray-400 leading-tight">Hyderabad, India</span>
                            </li>
                            <li className="flex gap-4 font-medium">
                                <span className="text-primary-500 text-xl">📞</span>
                                <span className="text-gray-400">+91 7675017264</span>
                            </li>
                            <li className="flex gap-4 font-medium">
                                <span className="text-primary-500 text-xl">✉️</span>
                                <span className="text-gray-400">metamatrixmedia.com</span>
                            </li>
                        </ul>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-gray-500 font-medium">© 2026 Meta Matrix Media. Elevating Digital Brands.</p>
                    <div className="flex gap-10 text-sm font-bold text-gray-500">
                        <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
