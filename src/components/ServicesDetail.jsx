import React from 'react';
import './ServicesDetail.css';

const ServicesDetail = () => {
    const services = [
        {
            number: '01',
            title: 'Web Development',
            description: 'We build modern, responsive websites that load fast, look clean, and work perfectly across desktops, tablets, and mobiles.',
            features: ['Responsive Design', 'Fast Loading', 'Clean Code', 'SEO Optimized']
        },
        {
            number: '02',
            title: 'App Development',
            description: 'High-performance Android and cross-platform applications designed for smooth user experience and real-world usage.',
            features: ['Native Performance', 'Cross-Platform', 'User-Centric', 'Scalable']
        },
        {
            number: '03',
            title: 'Software Development',
            description: 'Custom software solutions that automate processes, improve workflows, and scale as your business grows.',
            features: ['Custom Solutions', 'Automation', 'Scalable Architecture', 'Long-term Support']
        }
    ];

    return (
        <section className="services-detail section">
            <div className="container">
                <div className="section-header text-center animate-fade-in-up">
                    <h2>Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </div>

                <div className="services-detail-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-detail-card card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="service-number">{service.number}</div>
                            <h3 className="service-detail-title">{service.title}</h3>
                            <p className="service-detail-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="service-feature">
                                        <span className="feature-icon">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDetail;
