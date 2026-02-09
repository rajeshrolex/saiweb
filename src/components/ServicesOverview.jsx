import React from 'react';
import './ServicesOverview.css';

const ServicesOverview = () => {
    const services = [
        {
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
            title: 'Website Development',
            description: 'Mobile-friendly websites, business sites, and e-commerce solutions that look professional and perform smoothly on all devices.',
            color: 'purple'
        },
        {
            image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&q=80',
            title: 'Branding & Logo',
            description: 'Unique logos and consistent brand identity that reflects your business and builds trust with customers.',
            color: 'pink'
        },
        {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
            title: 'Digital Marketing',
            description: 'Result-driven social media and performance campaigns focused on visibility, leads, and growth.',
            color: 'blue'
        },
        {
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=80',
            title: 'SEO Services',
            description: 'On-page and technical SEO to improve search rankings, website traffic, and long-term online presence.',
            color: 'green'
        },
        {
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80',
            title: 'Mobile Application',
            description: 'Custom iOS and Android apps built for performance, user experience, and business growth.',
            color: 'orange'
        }
    ];

    return (
        <section id="services" className="services-overview section">
            <div className="container">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card card ${service.color}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-image-wrapper">
                                <div className="service-image-overlay"></div>
                                <img src={service.image} alt={service.title} className="service-image" />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
