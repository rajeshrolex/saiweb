import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '⚡',
            title: 'Clean and maintainable code',
            description: 'Well-structured, documented code that\'s easy to understand and scale'
        },
        {
            icon: '🎯',
            title: 'User-focused design approach',
            description: 'Every decision centered around creating the best user experience'
        },
        {
            icon: '💬',
            title: 'Clear communication at every step',
            description: 'Transparent updates and collaborative process throughout development'
        },
        {
            icon: '🚀',
            title: 'On-time delivery with long-term support',
            description: 'Reliable timelines with continued maintenance and support'
        }
    ];

    return (
        <section id="why-us" className="why-choose-us section">
            <div className="container">
                <div className="section-header text-center animate-fade-in-up">
                    <h2>Why Choose Us</h2>
                    <p className="section-subtitle">
                        We're committed to delivering excellence in every project
                    </p>
                </div>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card glass animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="reason-icon">{reason.icon}</div>
                            <h3 className="reason-title">{reason.title}</h3>
                            <p className="reason-description">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
