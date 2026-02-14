import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImages = [
        '/hero-bg-1.png',
        '/hero-bg-2.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Text */}
                    <div className="text-white space-y-6 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Web, App & Software Development That{' '}
                            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                                Grows Your Business
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                            We design and develop fast, secure, and scalable digital products — from websites to custom software — built for real business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl shadow-xl text-lg font-black text-white bg-primary-600 hover:bg-primary-700 shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 rounded-2xl shadow-sm text-lg font-black text-white bg-white/5 backdrop-blur-md hover:bg-white/15 focus:outline-none transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative hidden lg:block animate-fade-in group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>



                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
