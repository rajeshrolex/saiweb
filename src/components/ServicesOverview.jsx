import React from 'react';

const ServicesOverview = () => {
    const services = [
        {
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
            title: 'Website Development',
            description: 'Mobile-friendly websites, business sites, and e-commerce solutions that look professional and perform smoothly on all devices.',
            color: 'from-purple-500 to-indigo-600'
        },
        {
            image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&q=80',
            title: 'Branding & Logo',
            description: 'Unique logos and consistent brand identity that reflects your business and builds trust with customers.',
            color: 'from-pink-500 to-rose-600'
        },
        {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
            title: 'Digital Marketing',
            description: 'Result-driven social media and performance campaigns focused on visibility, leads, and growth.',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=80',
            title: 'SEO Services',
            description: 'On-page and technical SEO to improve search rankings, website traffic, and long-term online presence.',
            color: 'from-green-500 to-emerald-600'
        },
        {
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80',
            title: 'Mobile Application',
            description: 'Custom iOS and Android apps built for performance, user experience, and business growth.',
            color: 'from-orange-500 to-amber-600'
        },
        {
            image: '/ui ux.jpg',
            title: 'UI/UX Design',
            description: 'Creating intuitive and engaging user interfaces that provide seamless digital experiences.',
            color: 'from-primary-500 to-primary-700'
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
                    <p className="text-lg text-gray-600">Tailored digital solutions to elevate your brand and drive growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                                </div>
                            </div>

                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>

                            <div className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
