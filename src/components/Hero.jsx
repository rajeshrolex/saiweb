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
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 rounded-xl shadow-sm text-base font-semibold text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative hidden lg:block animate-fade-in">
                        <div className="absolute top-10 left-10 w-48 h-32 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float">
                            <div className="space-y-2">
                                <div className="h-2 bg-primary-400 rounded w-3/4"></div>
                                <div className="h-2 bg-primary-300 rounded w-1/2"></div>
                                <div className="h-2 bg-primary-400 rounded w-2/3"></div>
                            </div>
                        </div>
                        <div className="absolute top-40 right-10 w-40 h-40 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="w-full h-12 bg-primary-500 rounded-lg"></div>
                                <div className="w-full h-12 bg-primary-400 rounded-lg"></div>
                                <div className="w-full h-12 bg-primary-400 rounded-lg"></div>
                                <div className="w-full h-12 bg-primary-500 rounded-lg"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-20 w-44 h-36 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                            <div className="flex items-end justify-around h-full gap-2">
                                <div className="w-8 bg-primary-500 rounded-t" style={{ height: '60%' }}></div>
                                <div className="w-8 bg-primary-400 rounded-t" style={{ height: '80%' }}></div>
                                <div className="w-8 bg-primary-500 rounded-t" style={{ height: '40%' }}></div>
                            </div>
                        </div>
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
