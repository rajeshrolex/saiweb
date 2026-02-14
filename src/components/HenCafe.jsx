import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HenCafe = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const features = [
        {
            title: "Live Market Trends",
            description: "Real-time updates on poultry prices (Egg, Chick, Chicken) and demand shifts across India to time your trades perfectly.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Zero-Commission",
            description: "Direct-to-farmer marketplace. Post sales and connect with verified buyers without any middleman or hidden fees.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            title: "Industry Networking",
            description: "Massive directory of poultry companies, equipment providers, and expert consultants in one unified platform.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Resource Sharing",
            description: "Securely access educational PDFs, health guides, and farm transformation videos from a community of experts.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-[#0A0F1E] overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 blur-[150px] rounded-full -mr-96 -mt-96"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-3/5 text-left space-y-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                                <span className="text-primary-300 text-xs font-black uppercase tracking-[0.2em]">Next-Gen App 2.0</span>
                            </div>

                            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-white leading-none tracking-tighter">
                                Hen<span className="text-primary-500 text-glow">Cafe.</span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                                Empowering thousands of poultry farmers with real-time intelligence, direct market access, and zero intermediaries.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center gap-5 px-10 py-6 bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10 text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">📱</div>
                                    <div className="relative z-10 text-left">
                                        <div className="text-[10px] uppercase font-black text-gray-400 group-hover:text-white/70 tracking-widest leading-none mb-1">Available on</div>
                                        <div className="text-2xl font-black text-gray-950 group-hover:text-white leading-none">Google Play</div>
                                    </div>
                                </a>

                                <div className="flex -space-x-4 items-center pl-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-12 h-12 rounded-full border-4 border-[#0A0F1E] object-cover" alt="User" />
                                    ))}
                                    <div className="pl-8 text-white/50 font-bold text-sm">
                                        <div className="text-white font-black text-lg">10k+</div>
                                        Active Farmers
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/5 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="relative z-10 transform lg:translate-x-12 rotate-3 hover:rotate-0 transition-all duration-1000">
                                <div className="relative w-72 lg:w-80 h-[600px] glass-dark rounded-[3.5rem] border-[14px] border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white/5 rounded-b-3xl z-20"></div>
                                    <div className="h-full w-full overflow-hidden">
                                        <img
                                            src="/hen cafe.jpeg"
                                            alt="HenCafe App Preview"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why HenCafe Section */}
            <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-32">
                        <div className="lg:w-1/2 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-6xl font-black text-gray-950 leading-[1.1] tracking-tighter">
                                    Why the Industry <br />
                                    Trusts <span className="text-primary-600">HenCafe.</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                    We've built an ecosystem that solves the most critical pain points of poultry professionals across India.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {[
                                    { t: "Hyper-Local Intelligence", d: "Market trends and insights tailored specifically for your state and language." },
                                    { t: "Verified direct trading", d: "A closed-loop marketplace ensuring secure transactions with verified stakeholders." },
                                    { t: "Zero Overhead Costs", d: "A commission-free platform that puts 100% of the profits back into your hands." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-20 h-20 rounded-[2rem] bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-all duration-500 shadow-sm group-hover:shadow-primary-200">
                                            <span className="text-2xl font-black text-primary-600 group-hover:text-white">0{i + 1}</span>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-2xl font-black text-gray-950 mb-2 tracking-tight">{item.t}</h4>
                                            <p className="text-gray-600 leading-relaxed text-lg">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-8 relative">
                                <div className="space-y-8">
                                    <div className="bg-gray-950 p-12 rounded-[4rem] text-white space-y-4 hover:scale-105 transition-transform duration-500">
                                        <div className="text-6xl font-black text-primary-500 tracking-tighter">10k+</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-50">Active Scale</div>
                                    </div>
                                    <div className="bg-primary-50 p-12 rounded-[4rem] space-y-4 hover:rotate-3 transition-all duration-500">
                                        <div className="text-6xl font-black text-primary-600 tracking-tighter">0%</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-50">Middleman</div>
                                    </div>
                                </div>
                                <div className="pt-16 space-y-8">
                                    <div className="bg-indigo-600 p-12 rounded-[4rem] text-white space-y-4 hover:-rotate-3 transition-all duration-500">
                                        <div className="text-6xl font-black text-indigo-200 tracking-tighter">24/7</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-50">Support</div>
                                    </div>
                                    <div className="bg-gray-50 p-12 rounded-[4rem] space-y-4 hover:scale-95 transition-all duration-500">
                                        <div className="text-6xl font-black text-gray-950 tracking-tighter">ALL</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-50">Languages</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 lg:py-48 bg-[#F8FAFC] relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-[10px] font-black uppercase tracking-widest">Process Flow</div>
                        <h2 className="text-4xl lg:text-7xl font-black text-gray-950 tracking-tighter leading-none">Your Path to <span className="text-primary-600">Smart Farming.</span></h2>
                        <p className="text-xl text-gray-600 font-medium">Four precision-engineered steps to modernize your poultry business flow.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative lg:px-12">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gray-200"></div>

                        {[
                            { step: "01", title: "Setup", desc: "Fast registration with secure OTP authentication in seconds." },
                            { step: "02", title: "Analyze", desc: "Monitor daily market trends and compare state-wise prices." },
                            { step: "03", title: "Connect", desc: "Direct communication with top verified poultry buyers & sellers." },
                            { step: "04", title: "Succeed", desc: "Close profitable deals with absolute safety and zero fees." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 space-y-8 group text-center">
                                <div className="w-24 h-24 rounded-[2.5rem] bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] flex items-center justify-center mx-auto text-3xl font-black text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700 border border-gray-100 group-hover:translate-y-[-10px]">
                                    {item.step}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-gray-950 tracking-tight">{item.title}</h4>
                                    <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Features Grid */}
            <section id="rates" className="py-32 lg:py-48 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-24">
                        <div className="max-w-3xl space-y-6">
                            <div className="h-1.5 w-24 bg-primary-600 rounded-full"></div>
                            <h2 className="text-4xl lg:text-7xl font-black text-gray-950 tracking-tighter leading-[0.9]">Complete App <br /><span className="text-primary-600">Ecosystem.</span></h2>
                            <p className="text-xl text-gray-600 font-medium max-w-2xl">Every tool you need to manage your poultry venture in one powerful application.</p>
                        </div>
                        <a href="#marketplace" className="px-10 py-5 bg-gray-950 text-white rounded-3xl font-black hover:bg-primary-600 transition-all duration-500">Download Now</a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="p-10 rounded-[3.5rem] bg-gray-50 hover:bg-white transition-all duration-700 group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 text-primary-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium mb-8">{feature.description}</p>
                                <div className="mt-auto h-1 w-0 bg-primary-600 group-hover:w-full transition-all duration-1000"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Control Section */}
            <section id="expert" className="py-32 lg:py-48 bg-[#0A0F1E] relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
                        <div className="space-y-16 order-2 lg:order-1 animate-fade-in-up">
                            <div className="space-y-6">
                                <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter leading-[0.8]">The Expert's <br /><span className="text-primary-500 text-glow">Dashboard.</span></h2>
                                <p className="text-2xl text-gray-400 font-bold leading-relaxed">Built for precision. Data-driven tools that turn your farm into a high-performance business.</p>
                            </div>

                            <div className="space-y-12">
                                {[
                                    { title: "Smart Disease Monitoring", desc: "Real-time AI-assisted health alerts and local outbreak tracking." },
                                    { title: "Deep Market Analytics", desc: "Advanced charting tools for long-term historical price modeling." },
                                    { title: "Enterprise Management", desc: "End-to-end digital tracking of overheads, inventory, and ROI." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-10 group">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-primary-400 font-black text-2xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-xl">
                                            0{idx + 1}
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-primary-400 transition-colors">{item.title}</h4>
                                            <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/5] rounded-[4.5rem] bg-zinc-900 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] border border-white/5 transform lg:translate-x-12 rotate-2 hover:rotate-0 transition-all duration-1000">
                                <img
                                    src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Poultry Expert"
                                    className="w-full h-full object-cover opacity-30 transform hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-x-8 bottom-8 p-10 glass rounded-[3rem] text-center backdrop-blur-3xl border border-white/10">
                                    <p className="text-primary-400 font-black text-sm uppercase tracking-widest mb-4">Elite Tier Access</p>
                                    <h4 className="text-3xl font-black text-white tracking-tighter">JOIN 10K+ PROGRESSIVE GROWERS</h4>
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/10 rounded-full blur-[120px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Marketplace Section */}
            <section id="marketplace" className="py-32 lg:py-60 bg-white">
                <div className="container mx-auto px-4">
                    <div className="relative max-w-7xl mx-auto py-24 lg:py-40 px-12 lg:px-24 bg-black rounded-[5rem] overflow-hidden flex flex-col items-center text-center space-y-12">
                        {/* Dramatic BG elements */}
                        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-600/10 rounded-full blur-[150px] -mr-[400px] -mt-[400px]"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] -ml-[300px] -mb-[300px]"></div>

                        <div className="relative z-10 space-y-12 max-w-4xl">
                            <div className="h-1 lg:h-1.5 w-32 bg-primary-500 mx-auto rounded-full"></div>
                            <h2 className="text-5xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">Ready to <br /><span className="text-primary-500 text-glow">Evolve?</span></h2>
                            <p className="text-xl lg:text-3xl text-gray-400 font-medium">Download HenCafe and join the future of poultry farming.</p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.svpfarms.hencafe&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-6 px-12 py-8 bg-white rounded-[2.5rem] hover:bg-primary-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(14,165,233,0.4)]"
                                >
                                    <div className="text-5xl group-hover:rotate-12 transition-transform duration-500">📱</div>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-black text-gray-400 group-hover:text-white/70 tracking-[0.2em] mb-1">Android App</div>
                                        <div className="text-3xl font-black text-black group-hover:text-white leading-none">Get it on Google</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HenCafe;
