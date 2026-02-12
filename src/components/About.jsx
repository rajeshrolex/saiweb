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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-primary-100 hover:border-primary-100 group">
                                <div className="text-5xl font-black text-primary-600 mb-3 group-hover:scale-110 transition-all origin-left">100+</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Projects Delivered</div>
                                <div className="mt-6 h-1 w-0 bg-primary-500 group-hover:w-full transition-all duration-700"></div>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-indigo-100 hover:border-indigo-100 group">
                                <div className="text-5xl font-black text-indigo-600 mb-3 group-hover:scale-110 transition-all origin-left">50+</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Happy Clients</div>
                                <div className="mt-6 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-700"></div>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-blue-100 hover:border-blue-100 group">
                                <div className="text-5xl font-black text-blue-600 mb-3 group-hover:scale-110 transition-all origin-left">5+</div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Years Experience</div>
                                <div className="mt-6 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
