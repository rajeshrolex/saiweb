import React from 'react';

const ServicesDetail = () => {
    const services = [
        {
            number: '01',
            title: 'Web Engineering',
            description: 'We build modern, responsive websites that load fast, look clean, and work perfectly across desktops, tablets, and mobiles.',
            features: ['Responsive Design', 'Vite-powered Speed', 'Clean React Code', 'SEO Optimized'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            number: '02',
            title: 'App Ecosystems',
            description: 'High-performance Android and cross-platform applications designed for smooth user experience and real-world usage.',
            features: ['Native Performance', 'React Native / Flutter', 'User-Centric UX', 'Scalable Backend'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
            color: 'from-indigo-500 to-purple-600'
        },
        {
            number: '03',
            title: 'Custom Software',
            description: 'Custom software solutions that automate processes, improve workflows, and scale as your business grows.',
            features: ['Bespoke Architectures', 'Task Automation', 'Cloud-ready Apps', '24/7 Priority Support'],
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
            color: 'from-primary-500 to-indigo-600'
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto mb-20 text-center animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Specialized Digital Solutions for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-600 font-black">
                            Modern Enterprises
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We combine strategy, design, and technology to deliver comprehensive digital products that solve complex business challenges.
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 rounded-[2.5rem] bg-white shadow-xl border border-gray-100 animate-fade-in-up ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-2xl font-black text-primary-600 shadow-sm">
                                    {service.number}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-200">
                                        Exploration Session →
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-[2rem] group-hover:opacity-20 transition-opacity duration-500`}></div>
                                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDetail;
