import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, Zap, Shield, TrendingUp } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Top 5 flagship projects — fully built, deployed & real
const projects = [
    {
        title: 'Xylos AI',
        desc: 'AI-powered platform combining modern design with intelligent features for seamless user experiences. Integrated AI APIs for content generation and automation workflows.',
        tags: ['React', 'AI Integration', 'Tailwind CSS', 'Vercel'],
        live: 'https://xylosai.vercel.app/',
        github: 'https://github.com/surinder2003k/Xylos-AI',
        gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        initials: 'XA',
        featured: true,
        metrics: '2.5k+ monthly users',
    },
    {
        title: 'Asky — AI Chat',
        desc: 'Private, ChatGPT-style AI chat built with React 19 + Vite. Runs entirely in-browser — chats saved locally, no account needed, connect your own API keys. Works on desktop & mobile.',
        tags: ['React 19', 'Vite', 'Tailwind CSS', 'AI'],
        live: 'https://aichatapp-8ksusdph.manus.space',
        github: 'https://github.com/surinder2003k/Asky',
        gradient: 'linear-gradient(135deg, #00d4aa, #38bdf8)',
        initials: 'AK',
        featured: true,
        metrics: 'Privacy-first, no-auth',
    },
    {
        title: 'Pulse AI',
        desc: 'AI-powered blog & analytics platform with real-time insights and automated content generation. SEO optimization, reading time estimation, and engagement tracking built in.',
        tags: ['Next.js', 'AI', 'Blog Platform', 'Analytics'],
        live: 'https://pulse-blog-ai.vercel.app/',
        github: 'https://github.com/surinder2003k/Pulse-AI',
        gradient: 'linear-gradient(135deg, #ff6b9d, #f59e0b)',
        initials: 'PA',
        featured: true,
        metrics: '500+ articles generated',
    },
    {
        title: 'PathSeekers',
        desc: 'Modern educational platform helping students discover and navigate their learning journey. Full-stack with authentication, course management, and progress tracking.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        live: 'https://pathseekers.vercel.app/',
        github: 'https://github.com/surinder2003k/pathseekers',
        gradient: 'linear-gradient(135deg, #38bdf8, #6c63ff)',
        initials: 'PS',
        featured: true,
        metrics: '1k+ registered students',
    },
    {
        title: 'Xeloria',
        desc: 'Next-gen web experience showcasing modern web technologies. Interactive animations, 3D elements, and performance-optimized rendering. A playground for creative coding.',
        tags: ['React', 'Three.js', 'Framer Motion', 'Creative'],
        live: 'https://xeloria.vercel.app/',
        github: 'https://github.com/surinder2003k/Xeloria',
        gradient: 'linear-gradient(135deg, #f59e0b, #38bdf8)',
        initials: 'XR',
        featured: false,
        metrics: 'Creative coding',
    },
];

const projectHighlights = [
    { icon: <Zap size={20} />, label: 'Performance', value: '95+ Lighthouse', desc: 'Optimized Core Web Vitals' },
    { icon: <Shield size={20} />, label: 'Security', value: 'A+ Headers', desc: 'CSP, HSTS, XSS protection' },
    { icon: <TrendingUp size={20} />, label: 'SEO Ready', value: '100/100 Score', desc: 'Meta tags, structured data' },
    { icon: <Star size={20} />, label: 'Accessibility', value: 'WCAG 2.1 AA', desc: 'Semantic HTML, ARIA labels' },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="projects" ref={ref} aria-label="Featured projects">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        My top 5 flagship builds — each one shipped, deployed, and solving a real problem.
                        From AI tools to full-stack apps, these are the projects I'm most proud of.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            className="glass-card project-card"
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
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="project-image" style={{ background: project.gradient }} aria-hidden="true">
                                {project.initials}
                                {project.featured && (
                                    <span className="project-featured-badge">Featured</span>
                                )}
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, ti) => (
                                    <span key={ti} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-metrics" style={{ marginBottom: '16px', fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                                {project.metrics}
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link live"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink size={16} aria-hidden="true" /> Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link code"
                                    aria-label={`View source code of ${project.title} on GitHub`}
                                >
                                    <Github size={16} aria-hidden="true" /> Source
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="project-highlights"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                    style={{ marginTop: '60px' }}
                >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                        What Makes These Projects Different
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        {projectHighlights.map((highlight, i) => (
                            <motion.div
                                key={i}
                                className="glass-card"
                                style={{ textAlign: 'center', padding: '28px 20px' }}
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            >
                                <div className="about-card-icon" aria-hidden="true" style={{ marginBottom: '16px', background: 'rgba(108, 99, 255, 0.1)', color: 'var(--accent-primary)' }}>{highlight.icon}</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '4px' }}>{highlight.value}</div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>{highlight.label}</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{highlight.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}