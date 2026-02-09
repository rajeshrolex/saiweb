import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
    const steps = [
        {
            number: '01',
            title: 'Requirement Gathering',
            description: 'We start with a detailed consultation to understand your business goals, target audience, design preferences, and technical requirements.',
            icon: '📋'
        },
        {
            number: '02',
            title: 'Planning & Strategy',
            description: 'Based on your inputs, we create a sitemap and define the structure, features, and technology stack to be used for your project.',
            icon: '🎯'
        },
        {
            number: '03',
            title: 'UI/UX Design',
            description: 'Our designers create visually engaging and user-friendly design mockups for desktop and mobile, ensuring your brand identity shines.',
            icon: '🎨'
        },
        {
            number: '04',
            title: 'Development',
            description: 'Once the design is approved, we develop your solution with clean, scalable code that\'s responsive, fast, and SEO-friendly.',
            icon: '💻'
        },
        {
            number: '05',
            title: 'Testing & QA',
            description: 'We thoroughly test across devices and browsers to ensure performance, security, speed, and responsiveness are all up to standard.',
            icon: '🔍'
        },
        {
            number: '06',
            title: 'Launch & Go Live',
            description: 'Once approved, we launch your product on your domain and ensure it\'s fully functional, secure, and ready to drive results.',
            icon: '🚀'
        },
        {
            number: '07',
            title: 'Support & Maintenance',
            description: 'We provide ongoing support, training, and maintenance to ensure your digital solution continues to perform smoothly.',
            icon: '🛠️'
        }
    ];

    return (
        <section className="how-we-work section">
            <div className="container">
                <div className="section-header text-center animate-fade-in-up">
                    <h2>How We Work</h2>
                    <p className="section-subtitle">
                        A proven process that delivers exceptional results every time
                    </p>
                </div>

                <div className="workflow-timeline">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="workflow-step animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-content">
                                <div className="step-number">{step.number}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
