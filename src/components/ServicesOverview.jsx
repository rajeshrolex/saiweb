import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const ServicesOverview = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Expertise</h2>
                    <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Tailored digital solutions to elevate your brand and drive growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-xl shadow-sm border border-gray-100">
                                        {service.icon}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed line-clamp-3">{service.shortDescription}</p>
                                <div className="mt-6 flex items-center text-primary-600 font-bold text-sm">
                                    Exploration Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>

                            <div className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500`}></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
