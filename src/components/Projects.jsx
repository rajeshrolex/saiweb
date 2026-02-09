import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&q=80',
            description: 'A full-featured online store with secure payment gateway integration and user-friendly dashboard.'
        },
        {
            id: 2,
            title: 'Health & Fitness App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80',
            description: 'Cross-platform mobile application for tracking workouts and nutrition plans.'
        },
        {
            id: 3,
            title: 'Corporate Branding',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=500&q=80',
            description: 'Complete brand identity overhaul including logo design, color palette, and stationery.'
        },
        {
            id: 4,
            title: 'Real Estate Portal',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
            description: 'Dynamic property listing platform with advanced search filters and interactive maps.'
        }
    ];

    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Recent Projects</h2>
                    <p className="section-subtitle">Showcasing our best work and success stories.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-category">{project.category}</div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href="#contact" className="project-link">View Details <span className="arrow">→</span></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
