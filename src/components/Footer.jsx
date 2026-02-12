import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-black tracking-tighter">
                            SVP<span className="text-primary-500">farm's</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Pioneering digital excellence in the agriculture and poultry sector. Building products that matter.
                        </p>
                        <div className="flex gap-4">
                            {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-all group">
                                    <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-primary-600 px-2 py-1 rounded">{social}</span>
                                    <div className="w-5 h-5 bg-gray-500 group-hover:bg-white rounded-sm"></div>
                                </a>
                            ))}
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
                            <li className="flex gap-4">
                                <span className="text-primary-500 text-xl">📍</span>
                                <span className="text-gray-400 leading-tight">Nellore, Andhrapradesh, 524001</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-primary-500 text-xl">📞</span>
                                <span className="text-gray-400">9885279787</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-primary-500 text-xl">✉️</span>
                                <span className="text-gray-400">csr.mf7@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile App */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white">Our App</h4>
                        <p className="text-gray-400">Manage your farm on the go with our flagship mobile application.</p>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group"
                        >
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📱</div>
                            <div>
                                <div className="text-[10px] uppercase font-bold text-gray-400">Get it on</div>
                                <div className="text-lg font-black tracking-tight">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 font-medium">© 2026 SVPfarm's. Engineered for Agriculture.</p>
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
