import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        { name: "Divya Furniture World", url: "https://divyafurnitureworld.com/", category: "E-Commerce" },
        { name: "AVS Creations", url: "https://avscreations.in/", category: "Creative Agency" },
        { name: "Ziya JW", url: "https://ziyajw.in/", category: "Jewelry Store" },
        { name: "NDARZ", url: "https://ndarz.com/", category: "E-Commerce" },
        { name: "GSR Uniforms", url: "https://gsruniforms.com/", category: "Manufacturing" },
        { name: "Blue Wild", url: "https://bluewild.in/", category: "Apparel" },
        { name: "Dehyde", url: "https://dehyde.in/", category: "Business" },
        { name: "Nutristin", url: "https://nutristin.com/", category: "Health & Wellness" },
        { name: "Hotpink Worm", url: "https://hotpink-worm-851797.hostingersite.com/", category: "Corporate" },
        { name: "Bioearth Agros", url: "https://bioearthagros.com/", category: "Agriculture" }
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
                        <a
                            key={project.url}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 animate-fade-in-up h-full outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <span className="font-bold text-primary-600 text-2xl">{project.name.charAt(0)}</span>
                                    </div>
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{new URL(project.url).hostname.replace('www.', '')}</span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider text-primary-600 shadow-sm border border-gray-100">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2 italic flex-grow">
                                    "Professional digital presence crafted with modern standards and user-centric design."
                                </p>
                                <div className="inline-flex items-center text-sm font-black text-gray-900 group-hover:text-primary-600 transition-colors pt-4 border-t border-gray-50 mt-auto">
                                    Visit Website <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary-600">↗</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
