import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:surinder2003k@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink);
    };

    return (
        <section className="section contact" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="contact-info"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h2>

                    <motion.p className="contact-text" variants={fadeUp}>
                        I&apos;m always open to new opportunities, collaborations, and interesting
                        projects. Feel free to reach out — let&apos;s build something amazing together!
                    </motion.p>

                    <motion.div className="contact-details" variants={fadeUp}>
                        <div className="contact-item">
                            <div className="contact-item-icon"><Mail size={22} /></div>
                            <div>
                                <div className="contact-item-label">Email</div>
                                <div className="contact-item-value">surinder2003k@gmail.com</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-icon"><Phone size={22} /></div>
                            <div>
                                <div className="contact-item-label">Phone</div>
                                <div className="contact-item-value">+91 6230214334</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-icon"><MapPin size={22} /></div>
                            <div>
                                <div className="contact-item-label">Location</div>
                                <div className="contact-item-value">Mohali (Kharar), Punjab, India</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-socials" variants={fadeUp}>
                        <a
                            href="https://github.com/surinder2003k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://linkedin.com/in/surinder-web-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="https://surinder.free.nf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Website"
                        >
                            <Globe size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="glass-card contact-form-wrapper"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.3, duration: 0.6 } } }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Let's work together"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
