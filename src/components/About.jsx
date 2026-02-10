import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            About <span className="text-primary-600">Us</span>
                        </h2>
                        <p className="text-xl font-medium text-primary-600 leading-relaxed">
                            We help businesses turn ideas into reliable digital products.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our focus is simple — clean design, efficient code, and scalable solutions.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No unnecessary features. No shortcuts. Just software that works and grows with your business.
                        </p>
                    </div>

                    <div className="flex-1 w-full animate-fade-in">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                                <div className="text-gray-600 font-medium">Projects Delivered</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                                <div className="text-gray-600 font-medium">Happy Clients</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                                <div className="text-gray-600 font-medium">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
