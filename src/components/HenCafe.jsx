import React from 'react';

const HenCafe = () => {
    const features = [
        {
            title: "Real-time Market Rates",
            description: "Stay updated with daily Egg, Chick, and Chicken rates across different regions/markets in India.",
            icon: (
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Buy & Sell Poultry",
            description: "Direct marketplace for farmers and traders to buy or sell poultry stocks without intermediaries.",
            icon: (
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            title: "Expert Guidance",
            description: "Access professional advice and information on poultry farming management and disease control.",
            icon: (
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Reliable Network",
            description: "Connect with verified buyers and sellers in the poultry industry across the country.",
            icon: (
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-white space-y-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-bold uppercase tracking-wider">
                                Featured Product
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                                HenCafe <br />
                                <span className="text-primary-400">Poultry Info</span>
                            </h1>
                            <p className="text-xl text-primary-100/80 leading-relaxed max-w-xl">
                                A complete poultry marketplace app designed for farmers, sellers, and buyers. Get real-time rates, expert advice, and trade poultry with ease.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-4 bg-white text-primary-900 rounded-2xl font-black hover:bg-primary-50 transition-all shadow-xl active:scale-95"
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative flex justify-center">
                            <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                                <div className="h-full w-full bg-gradient-to-b from-primary-900 to-black p-6 flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-white rounded-3xl mb-6 shadow-lg flex items-center justify-center">
                                        <span className="text-4xl font-black text-primary-600">HC</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">HenCafe</h3>
                                    <p className="text-primary-300 text-sm">Poultry Management Redefined</p>
                                    <div className="mt-12 space-y-4 w-full">
                                        <div className="h-2 bg-white/20 rounded-full w-full"></div>
                                        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                                        <div className="h-2 bg-white/20 rounded-full w-5/6"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-500/20 blur-3xl rounded-full"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-300/10 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl font-black text-gray-900">Empowering Poultry Farmers</h2>
                        <p className="text-lg text-gray-600">
                            HenCafe is more than just an app; it's a digital companion for the modern poultry farmer, providing everything you need to succeed in the poultry industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-gray-50 hover:bg-primary-50 border border-gray-100 hover:border-primary-100 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-primary-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                        <div className="relative z-10 text-white space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-black">Ready to grow your poultry business?</h2>
                            <p className="text-xl text-primary-100 opacity-90">Download HenCafe today and join thousands of farmers across India.</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe" 
                                    className="px-8 py-4 bg-white text-primary-600 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl"
                                >
                                    Get it on Play Store
                                </a>
                            </div>
                        </div>
                        <div className="relative z-10">
                             <div className="w-48 h-48 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center text-white border border-white/20">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                                </svg>
                             </div>
                        </div>
                        
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HenCafe;
