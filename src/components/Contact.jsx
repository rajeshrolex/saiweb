import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contact Request from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoLink = `mailto:csr.mf7@gmail.com?subject=${subject}&body=${body}`;

        // Open the default mail client
        window.location.href = mailtoLink;

        setSubmitted(true);

        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1kYXNoYXJyYXk9IjEwIDEwIi8+PC9zdmc+')]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10 animate-fade-in-up">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Let's Build Something <br />
                                <span className="text-primary-600 italic">Extraordinary</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Have an idea or need a reliable development partner? Reach out to us and let's discuss the right solution for your business.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    📧
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Us</h4>
                                    <p className="text-lg font-black text-gray-900">csr.mf7@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Call Us</h4>
                                    <p className="text-lg font-black text-gray-900">9885279787</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Visit Us</h4>
                                    <p className="text-lg font-black text-gray-900">Nellore, Andhrapradesh, 524001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 ring-1 ring-black/5 backdrop-blur-sm relative">
                            {submitted && (
                                <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">✓</div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 italic">We'll get back to you within 24 hours.</p>
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-300 font-medium outline-none border border-gray-100"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-300 font-medium outline-none border border-gray-100"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-6 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-300 font-medium outline-none border border-gray-100 resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full py-5 bg-primary-600 text-white font-black rounded-2xl hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary-200 hover:shadow-none transform hover:translate-y-0.5 mt-4">
                                    Submit Request
                                </button>

                                <p className="text-xs text-center text-gray-400 font-medium">
                                    * We usually respond within 2-4 business hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
