import React from 'react';

const HowWeWork = () => {
    const steps = [
        {
            number: '01',
            title: 'Requirement Gathering',
            description: 'We start with a detailed consultation to understand your business goals, target audience, design preferences, and technical requirements.',
            icon: '📋',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            number: '02',
            title: 'Planning & Strategy',
            description: 'Based on your inputs, we create a sitemap and define the structure, features, and technology stack to be used for your project.',
            icon: '🎯',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            number: '03',
            title: 'UI/UX Design',
            description: 'Our designers create visually engaging and user-friendly design mockups for desktop and mobile, ensuring your brand identity shines.',
            icon: '🎨',
            color: 'bg-pink-50 text-pink-600'
        },
        {
            number: '04',
            title: 'Development',
            description: 'Once the design is approved, we develop your solution with clean, scalable code that\'s responsive, fast, and SEO-friendly.',
            icon: '💻',
            color: 'bg-indigo-50 text-indigo-600'
        },
        {
            number: '05',
            title: 'Testing & QA',
            description: 'We thoroughly test across devices and browsers to ensure performance, security, speed, and responsiveness are all up to standard.',
            icon: '🔍',
            color: 'bg-teal-50 text-teal-600'
        },
        {
            number: '06',
            title: 'Launch & Go Live',
            description: 'Once approved, we launch your product on your domain and ensure it\'s fully functional, secure, and ready to drive results.',
            icon: '🚀',
            color: 'bg-orange-50 text-orange-600'
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-20 text-center animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
                        Our Proven <span className="text-primary-600">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        A systematic approach that delivers exceptional results every time
                    </p>
                </div>

                <div className="relative">
                    {/* Background line for timeline (hidden on small screens) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${step.color}`}>
                                        {step.icon}
                                    </div>
                                    <div className="text-4xl font-black text-gray-100 group-hover:text-primary-50 transition-colors">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "{step.description}"
                                </p>

                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                    <div className="h-0.5 flex-grow bg-gray-100 group-hover:bg-primary-500 transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
