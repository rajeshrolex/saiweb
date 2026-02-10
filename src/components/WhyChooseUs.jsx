import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '⚡',
            title: 'Premium Code Quality',
            description: 'Well-structured, documented code that\'s easy to understand and scale for future growth.'
        },
        {
            icon: '🎯',
            title: 'User-First Ethos',
            description: 'Every decision is centered around creating the best user experience and achieving business goals.'
        },
        {
            icon: '💬',
            title: 'Radical Transparency',
            description: 'Clear communication and collaborative process throughout every single development phase.'
        },
        {
            icon: '🚀',
            title: 'On-Time Performance',
            description: 'Reliable timelines with continued maintenance and support to ensure long-term success.'
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-primary-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why Choose Our Team?
                    </h2>
                    <p className="text-lg text-primary-100">
                        We're committed to delivering excellence in every single digital pixel we create.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-black text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-primary-50 leading-relaxed font-medium">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
