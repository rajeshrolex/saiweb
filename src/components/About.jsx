import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const stats = [
        { label: "Projects Delivered", value: "100+", color: "primary" },
        { label: "Happy Clients", value: "50+", color: "indigo" },
        { label: "Years Experience", value: "5+", color: "blue" }
    ];

    const values = [
        {
            title: "Innovation",
            description: "Constantly pushing boundaries to find better solutions for complex problems.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Quality",
            description: "Uncompromising standards in every line of code and every pixel designed.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Scalability",
            description: "Building products that grow seamlessly alongside your business ambitions.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Centered Main Heading */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
                        About <span className="text-primary-600">Us</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
                </div>

                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="flex-1 space-y-8 animate-fade-in-up">
                        <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-bold tracking-wide uppercase">
                            Empowering Innovation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
                            Engineering <span className="text-primary-600">Growth</span> & Authority
                        </h2>
                        <div className="space-y-4">
                            <p className="text-xl font-bold text-gray-700 leading-relaxed">
                                Meta Matrix Media is dedicated to transforming brands into digital powerhouses through relentless strategy and elite execution.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                Based in Hyderabad, India, we specialize in comprehensive digital marketing, premium web development, and AI-powered content creation. Our focus is on driving measurable ROI and building community around your brand.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="glass p-8 rounded-[2rem] border border-gray-100 hover:border-primary-200 transition-all duration-500 group">
                                    <div className={`text-5xl font-black text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform origin-left`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 anim-fade-in-up">
                    <div className="bg-gradient-to-br from-primary-600 to-indigo-700 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-white/20 rounded-lg">🎯</span> Our Mission
                        </h3>
                        <p className="text-primary-50 text-lg leading-relaxed">
                            To bridge the gap between complex technology and business success through innovative software engineering and strategic digital transformation.
                        </p>
                    </div>
                    <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/20 rounded-full -ml-16 -mb-16 blur-3xl group-hover:bg-primary-500/30 transition-all duration-700"></div>
                        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-white/10 rounded-lg">🚀</span> Our Vision
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To be the leading catalyst for digital growth, recognized worldwide for engineering excellence and human-centered technology solutions.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Core <span className="text-primary-600">Values</span></h2>
                    <p className="block w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {values.map((value, idx) => (
                        <div key={idx} className="p-10 rounded-[2.5rem] bg-gray-50 border border-transparent hover:bg-white hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-500 group text-center md:text-left">
                            <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:rotate-6 transition-transform">
                                {value.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Service Excellence */}
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 mb-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1">
                            <h2 className="text-4xl font-black text-gray-900 mb-8">
                                Service <span className="text-primary-600">Excellence</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Beyond just writing code, we provide end-to-end digital solutions tailored to your unique business needs. Our cross-functional team ensures every project is a masterpiece of engineering and design.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Meta & Google Ads", desc: "ROI-focused performance marketing." },
                                    { title: "SEO Strategy", desc: "Dominating search rankings." },
                                    { title: "SMM & Content", desc: "Building community & authority." },
                                    { title: "Web Design", desc: "High-converting digital experiences." }
                                ].map((service, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{service.title}</h4>
                                            <p className="text-sm text-gray-500">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-primary-50 relative z-10">
                                <h4 className="text-2xl font-bold mb-6 text-gray-900">Why Partner With Us?</h4>
                                <ul className="space-y-6">
                                    {[
                                        { t: "Deep Technical Expertise", d: "Our engineers stay ahead of the curve." },
                                        { t: "On-Time Delivery", d: "We value your time as much as our own." },
                                        { t: "Long-Term Support", d: "We grow with your product post-launch." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="text-3xl">✨</span>
                                            <div>
                                                <p className="font-bold text-gray-900">{item.t}</p>
                                                <p className="text-gray-600 text-sm">{item.d}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-600/5 rounded-[2rem] -z-0"></div>
                        </div>
                    </div>
                </div>

                {/* Final CTA/Vision Statement */}
                <div className="text-center max-w-3xl mx-auto py-12">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-poppins">Ready to <span className="text-primary-600">Scale Your Brand?</span></h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                        Whether you're launching a new venture or looking to dominate your current market, Meta Matrix Media is your trusted growth partner.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 hover:-translate-y-1">
                        Start Your Project
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
