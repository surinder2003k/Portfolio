import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Globe, MessageSquare, Phone, CheckCircle, Loader2, AlertCircle, ChevronRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function loadContact() {
    try {
        const raw = localStorage.getItem('portfolio-content');
        if (raw) {
            const c = JSON.parse(raw);
            if (c.contact) {
                const social = c.social || {};
                return {
                    email: c.contact.email || 'surinder2003k@gmail.com',
                    telegram: c.contact.telegram || '@surinder2003k',
                    location: c.contact.location || 'Mohali, Punjab, India',
                    phone: c.contact.phone || '+91 98765 43210',
                    github: social.github || 'https://github.com/surinder2003k',
                    linkedin: social.linkedin || 'https://linkedin.com/in/surinder-web-dev',
                    website: social.website || 'https://surinder.free.nf',
                    telegramUrl: social.telegram || 'https://t.me/surinder2003k',
                };
            }
        }
    } catch {
        /* ignore parse errors, fall back to default */
    }
    return {
        email: 'surinder2003k@gmail.com',
        telegram: '@surinder2003k',
        location: 'Mohali, Punjab, India',
        phone: '+91 98765 43210',
        github: 'https://github.com/surinder2003k',
        linkedin: 'https://linkedin.com/in/surinder-web-dev',
        website: 'https://surinder.free.nf',
        telegramUrl: 'https://t.me/surinder2003k',
    };
}

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [contact] = useStateInit(loadContact);

    const contactMethods = [
        {
            icon: <Mail size={22} />,
            label: 'Email',
            value: contact.email,
            action: `mailto:${contact.email}`,
            description: 'Best for project inquiries & collaborations',
        },
        {
            icon: <MessageSquare size={22} />,
            label: 'Telegram',
            value: contact.telegram,
            action: contact.telegramUrl,
            description: 'Quick questions & instant replies',
            external: true,
        },
        {
            icon: <MapPin size={22} />,
            label: 'Location',
            value: contact.location,
            action: null,
            description: 'Available for remote work worldwide',
        },
        {
            icon: <Phone size={22} />,
            label: 'Phone',
            value: contact.phone,
            action: `tel:${contact.phone.replace(/\s/g, '')}`,
            description: 'For urgent matters only (10 AM - 6 PM IST)',
        },
    ];

    const handleChange = useCallback((e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        // Simulate form submission (replace with actual API call)
        const mailtoLink = `mailto:surinder2003k@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        
        // Small delay for UX
        await new Promise(resolve => setTimeout(resolve, 800));
        window.open(mailtoLink);
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
    }, [formData]);

    return (
        <section className="section contact" id="contact" ref={ref} aria-label="Get in touch">
            <div className="container">
                <motion.div
                    className="contact-info"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        Let's Work Together
                    </motion.h2>

                    <motion.p className="contact-text" variants={fadeUp}>
                        Got a project in mind? A question about my work? Or just want to say hello?
                        I read every message and usually reply within 24 hours. Let's build something cool.
                    </motion.p>

                    <motion.div className="contact-methods" variants={fadeUp} style={{ marginBottom: '40px' }}>
                        {contactMethods.map((method, i) => (
                            <a
                                key={i}
                                href={method.action}
                                target={method.external ? '_blank' : '_self'}
                                rel={method.external ? 'noopener noreferrer' : ''}
                                className="contact-method-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    padding: '20px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    transition: 'all 0.3s ease',
                                    marginBottom: '12px',
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--border-glow)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}
                            >
                                <div className="contact-item-icon" style={{ flexShrink: 0, background: 'rgba(108, 99, 255, 0.1)' }}>
                                    {method.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                        <div className="contact-item-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--primary)', fontWeight: 600 }}>
                                            {method.label}
                                        </div>
                                        {method.external && <Globe size={12} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />}
                                    </div>
                                    <div className="contact-item-value" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{method.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{method.description}</div>
                                </div>
                                <ChevronRight size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                            </a>
                        ))}
                    </motion.div>

                    <motion.div className="contact-socials" variants={fadeUp}>
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub profile (opens in new tab)"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn profile (opens in new tab)"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href={contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Personal website (opens in new tab)"
                        >
                            <Globe size={22} />
                        </a>
                        <a
                            href={contact.telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Telegram (opens in new tab)"
                        >
                            <MessageSquare size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="glass-card contact-form-wrapper"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.3, duration: 0.6 } } }}
                >
                    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name <span style={{ color: 'var(--signature-coral)' }}>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    disabled={formStatus === 'submitting'}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email <span style={{ color: 'var(--signature-coral)' }}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    disabled={formStatus === 'submitting'}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject <span style={{ color: 'var(--signature-coral)' }}>*</span></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Let's work together"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={formStatus === 'submitting'}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message <span style={{ color: 'var(--signature-coral)' }}>*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project, timeline, budget... or just say hi!"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                disabled={formStatus === 'submitting'}
                            />
                        </div>
                        
                        {formStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px',
                                    background: 'rgba(0, 212, 170, 0.15)',
                                    border: '1px solid rgba(0, 212, 170, 0.3)',
                                    borderRadius: '12px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                }}
                            >
                                <CheckCircle size={20} aria-hidden="true" />
                                <span>Message ready! Your email client has been opened. I'll get back to you soon.</span>
                            </motion.div>
                        )}
                        
                        {formStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px',
                                    background: 'rgba(255, 107, 157, 0.15)',
                                    border: '1px solid rgba(255, 107, 157, 0.3)',
                                    borderRadius: '12px',
                                    color: 'var(--signature-coral)',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    marginBottom: '20px',
                                }}
                            >
                                <AlertCircle size={20} aria-hidden="true" />
                                <span>Something went wrong. Please try emailing me directly at surinder2003k@gmail.com</span>
                            </motion.div>
                        )}

                        <button 
                            type="submit" 
                            className="btn-primary" 
                            style={{ alignSelf: 'flex-start', minWidth: '180px' }}
                            disabled={formStatus === 'submitting'}
                        >
                            {formStatus === 'submitting' ? (
                                <>
                                    <Loader2 size={18} aria-hidden="true" className="spinning" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} aria-hidden="true" />
                                </>
                            )}
                        </button>
                        
                        <p style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            By submitting, you agree to share your info for project discussion. No spam, ever.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

// read-once initializer (editor saves to localStorage; reload reflects new values)
function useStateInit(fn) {
    const [v] = useState(fn);
    return [v];
}