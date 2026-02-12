import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/servicesData';

const ServicePage = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === serviceId);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br ${service.color} overflow-hidden`}>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4 font-bold uppercase tracking-widest text-xs">
                            <span>←</span> Back to Home
                        </Link>
                        <div className="text-6xl lg:text-8xl flex justify-center mb-4">{service.icon}</div>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-8 animate-fade-in-left">
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
                                Delivering Excellence through <span className="text-primary-600">Expertise.</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-normal italic border-l-4 border-primary-500 pl-6">
                                "{service.fullDescription}"
                            </p>
                            <div className="pt-6">
                                <Link to="/contact" className="px-10 py-5 bg-gray-950 text-white rounded-2xl font-black hover:bg-primary-600 transition-all duration-500 shadow-xl hover:shadow-primary-200">
                                    Start a Project with Us
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative animate-fade-in-right">
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br ${service.color} rounded-[3rem] -z-10 blur-3xl opacity-30 animate-pulse`}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tight">Key Capabilities</h2>
                        <p className="text-xl text-gray-600">Our specialized approach ensures the highest quality results.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.features.map((feature, index) => (
                            <div key={index} className="p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col group hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-gray-950 mb-4">{feature}</h3>
                                <div className={`mt-auto h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-700`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className={`max-w-6xl mx-auto p-12 lg:p-24 rounded-[5rem] bg-gray-950 relative overflow-hidden flex flex-col items-center text-center space-y-12`}>
                        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-[100px] -z-10 animate-pulse`}></div>
                        <div className="space-y-6 max-w-3xl text-white">
                            <h2 className="text-5xl lg:text-6xl font-black leading-tight">Ready to Elevate Your <br /> <span className="text-primary-500">{service.title}?</span></h2>
                            <p className="text-xl text-gray-400 font-medium">Let's discuss how we can help you achieve your business goals with our tailored digital solutions.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <Link
                                to="/contact"
                                className={`inline-flex items-center justify-center gap-5 px-12 py-6 bg-white text-gray-950 rounded-[2rem] hover:bg-primary-500 hover:text-white transition-all duration-500 shadow-2xl transform hover:-translate-y-2 font-black group`}
                            >
                                Schedule a Call <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
