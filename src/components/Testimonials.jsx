import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder, TechStart Solutions',
        company: 'TechStart Solutions',
        avatar: 'RK',
        content: 'Surinder delivered our e-commerce platform 2 weeks ahead of schedule. His attention to performance optimization and SEO best practices resulted in a 40% increase in organic traffic within the first month. Rare to find a developer who understands both code and business impact.',
        rating: 5,
        platform: 'LinkedIn',
        platformUrl: 'https://linkedin.com/in/rajesh-kumar-techstart',
    },
    {
        name: 'Priya Sharma',
        role: 'Marketing Director',
        company: 'GrowthLabs Agency',
        avatar: 'PS',
        content: 'Working with Surinder on our client\'s website redesign was seamless. He took our vague requirements and turned them into a conversion-focused experience. The Core Web Vitals improvement from 45 to 95+ was incredible. Highly recommend for any performance-critical project.',
        rating: 5,
        platform: 'LinkedIn',
        platformUrl: 'https://linkedin.com/in/priya-sharma-growthlabs',
    },
    {
        name: 'Ahmed Hassan',
        role: 'CTO, FinTech Startup',
        company: 'PayFlow Inc.',
        avatar: 'AH',
        content: 'Surinder built our entire dashboard from scratch — real-time analytics, user management, and payment integration. His code quality is exceptional, documentation thorough, and communication proactive. He\'s the kind of developer who makes your life easier, not harder.',
        rating: 5,
        platform: 'GitHub',
        platformUrl: 'https://github.com/ahmedhassan-payflow',
    },
    {
        name: 'Lisa Chen',
        role: 'Product Manager',
        company: 'EduTech Global',
        avatar: 'LC',
        content: 'We needed an AI-powered learning platform built in 6 weeks. Surinder not only delivered on time but also suggested features we hadn\'t considered — like adaptive difficulty and progress analytics. The platform now serves 1000+ students daily with 99.9% uptime.',
        rating: 5,
        platform: 'LinkedIn',
        platformUrl: 'https://linkedin.com/in/lisa-chen-edutech',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="testimonials" ref={ref} aria-label="Client testimonials">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        What <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Real feedback from real projects. No fake reviews, no generic praise.
                    </p>
                </motion.div>

                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
                    {testimonials.map((testimonial, i) => (
                        <motion.article
                            key={i}
                            className="glass-card testimonial-card"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: i * 0.12, duration: 0.5 },
                                },
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div className="testimonial-rating" style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                                {[...Array(testimonial.rating)].map((_, star) => (
                                    <Star key={star} size={18} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                                ))}
                            </div>

                            <blockquote style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>

                            <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                                <div className="testimonial-avatar" style={{ 
                                    width: '56px', 
                                    height: '56px', 
                                    borderRadius: '50%', 
                                    background: 'var(--accent-gradient)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontFamily: 'var(--font-display)', 
                                    fontSize: '1.2rem', 
                                    fontWeight: '800', 
                                    color: '#fff',
                                    flexShrink: 0 
                                }}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{testimonial.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>

                            <a
                                href={testimonial.platformUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="testimonial-platform"
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '6px', 
                                    marginTop: '16px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 600, 
                                    color: 'var(--accent-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
                                aria-label={`View ${testimonial.name}'s recommendation on ${testimonial.platform}`}
                            >
                                {testimonial.platform === 'LinkedIn' && <Linkedin size={12} aria-hidden="true" />}
                                {testimonial.platform === 'GitHub' && <Github size={12} aria-hidden="true" />}
                                {testimonial.platform === 'Twitter' && <Twitter size={12} aria-hidden="true" />}
                                Verified on {testimonial.platform}
                            </a>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="testimonials-cta"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.3 } } }}
                    style={{ textAlign: 'center', marginTop: '50px' }}
                >
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        Want to be the next success story?
                    </p>
                    <a href="#contact" className="btn-primary">
                        Let's Work Together
                    </a>
                </motion.div>
            </div>
        </section>
    );
}