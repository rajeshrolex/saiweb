import React from 'react';
import { Link } from 'react-router-dom';

const HenCafeHome = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative bg-primary-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl">
                    {/* Background patterns */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                        <div className="lg:w-1/2 text-white space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-bold uppercase tracking-wider">
                                Our Latest Product
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                                HenCafe <br />
                                <span className="text-primary-400">Mobile App</span>
                            </h2>
                            <p className="text-xl text-primary-100 opacity-90 leading-relaxed max-w-xl">
                                Revolutionizing the poultry industry with real-time market rates, a seamless marketplace, and professional farming guidance.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Live Rates</h4>
                                        <p className="text-primary-200 text-sm">Daily market updates for Eggs, Chicks & Chicken.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Marketplace</h4>
                                        <p className="text-primary-200 text-sm">Buy and sell poultry products with zero commission.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 pt-6">
                                <Link
                                    to="/products/hencafe"
                                    className="px-8 py-4 bg-primary-500 text-white rounded-2xl font-black hover:bg-primary-400 transition-all shadow-xl active:scale-95"
                                >
                                    Learn More
                                </Link>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all backdrop-blur-sm active:scale-95"
                                >
                                    Download Now
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                            <div className="relative w-64 lg:w-72 h-[500px] lg:h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-all duration-700">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                                <div className="h-full w-full overflow-hidden">
                                    <img
                                        src="/hen cafe.jpeg"
                                        alt="HenCafe App"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Decorative glow */}
                            <div className="absolute -z-10 w-80 h-80 bg-primary-500/30 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HenCafeHome;
