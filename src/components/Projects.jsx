import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: 0,
            title: 'HenCafe - Poultry Info',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=500&q=80',
            description: 'A complete poultry marketplace app designed for farmers, sellers, and buyers. Real-time rates and expert guidance.',
            link: '/products/hencafe'
        },
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
        <section id="projects" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                            Our Recent <span className="text-primary-600">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Showcasing our best work and success stories from across various industries.
                        </p>
                    </div>
                    <Link to="/projects" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        View All Projects <span className="ml-2 text-xl">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={project.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider text-primary-600 shadow-sm border border-gray-100">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3 italic flex-grow">
                                    "{project.description}"
                                </p>
                                <Link to={project.link || "/contact"} className="inline-flex items-center text-sm font-black text-gray-900 group-hover:text-primary-600 transition-colors pt-4 border-t border-gray-50">
                                    View Details <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-600">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
