import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from './Icons';
import { services } from '../data/servicesData';

const ServicesOverview = () => {
    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden">
            {/* Ultra-soft ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/30 rounded-[100%] blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50/50 backdrop-blur-sm rounded-full border border-blue-100/50 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Our Expertise
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-[-0.03em] animate-fade-in-up leading-[1.1]">
                        We build digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">masterpieces.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
                        Elevating brands through high-end design and precision engineering.
                        Every pixel is crafted with purpose and passion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[440px]">
                    {services.map((service, index) => {
                        const IconComponent = Icons[`${service.icon}Icon`] || Icons.GlobeIcon;

                        return (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className={`group relative h-full bg-slate-50/50 rounded-[32px] p-1.5 overflow-hidden border border-slate-200/60 transition-all duration-700 animate-fade-in-up
                                    ${index === 0 || index === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Inner Card Content */}
                                <div className="relative h-full w-full bg-white rounded-[26px] overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col">

                                    {/* Image/Video Section with Advanced Parallax-like scale */}
                                    <div className="relative h-1/2 overflow-hidden bg-slate-100">
                                        {service.video ? (
                                            <video
                                                src={service.video}
                                                className="w-full h-full object-cover transform scale-[1.05] group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        ) : (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform scale-[1.05] group-hover:scale-110 transition-transform duration-1000 ease-out"
                                            />
                                        )}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60`}></div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay`}></div>

                                        {/* Premium Icon Badge */}
                                        <div className="absolute top-6 left-6">
                                            <div className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-[18px] border border-white/40 shadow-xl group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500">
                                                <IconComponent className="w-6 h-6 text-slate-800" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content Section */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors duration-300">
                                            {service.shortDescription}
                                        </p>

                                        {/* Refined Exploration Link */}
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-2 group/link">
                                                <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors uppercase">
                                                    Dive Deeper
                                                </span>
                                                <div className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500"></div>
                                            </div>
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-600 transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-blue-500 text-slate-400 group-hover:text-white">
                                                <Icons.ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Border Light Beam (Hidden by default, shown on hover) */}
                                    <div className="absolute inset-x-0 -bottom-px h-1 w-full scale-x-0 group-hover:scale-x-95 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50"></div>
        </section>
    );
};

export default ServicesOverview;
