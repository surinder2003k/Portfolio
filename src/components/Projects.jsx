import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
    {
        title: 'XyloSai',
        desc: 'AI-powered platform built with vibe coding — combining modern design with intelligent features for seamless user experiences.',
        tags: ['React.js', 'AI', 'Tailwind CSS'],
        live: 'https://xylosai.vercel.app/',
        github: 'https://github.com/surinder2003k/xylosai',
        gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        initials: 'XL',
        vibeCoded: true,
    },
    {
        title: 'PulseAI',
        desc: 'Smart AI-powered blog & analytics platform built via vibe coding. Leverages AI to provide real-time insights and content generation.',
        tags: ['React.js', 'AI', 'Blog'],
        live: 'https://pulse-blog-ai.vercel.app/',
        github: 'https://github.com/surinder2003k/pulseai',
        gradient: 'linear-gradient(135deg, #00d4aa, #38bdf8)',
        initials: 'PA',
        vibeCoded: true,
    },
    {
        title: 'PathSeekers',
        desc: 'A modern educational platform crafted with vibe coding. Helps students discover and navigate their learning journey.',
        tags: ['React.js', 'Node.js', 'MongoDB'],
        live: 'https://pathseekers.vercel.app/',
        github: 'https://github.com/surinder2003k/pathseekers',
        gradient: 'linear-gradient(135deg, #ff6b9d, #f59e0b)',
        initials: 'PS',
        vibeCoded: true,
    },
    {
        title: 'Xeloria',
        desc: 'Next-gen web experience built through vibe coding. A showcase of what\'s possible when creativity meets modern web tech.',
        tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
        live: 'https://xeloria.vercel.app/',
        github: 'https://github.com/surinder2003k/xeloria',
        gradient: 'linear-gradient(135deg, #38bdf8, #6c63ff)',
        initials: 'XR',
        vibeCoded: true,
    },
    {
        title: 'PostingApp',
        desc: 'A full-stack posting application with CRUD operations. Built with EJS, Node.js, and deployed on Vercel.',
        tags: ['EJS', 'Node.js', 'MongoDB'],
        live: 'https://posting-app-eight.vercel.app',
        github: 'https://github.com/surinder2003k/PostingApp',
        gradient: 'linear-gradient(135deg, #e34c26, #f0db4f)',
        initials: 'PO',
    },
    {
        title: 'Paste App (Notes)',
        desc: 'A feature-rich notes/paste application with clean UI. Create, edit, and manage text snippets effortlessly.',
        tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
        live: 'https://paste-app-gamma-peach.vercel.app/',
        github: 'https://github.com/surinder2003k/PasteApp',
        gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        initials: 'PA',
    },
    {
        title: 'PragmaticCoders Clone',
        desc: 'Pixel-perfect clone of PragmaticCoders website showcasing frontend mastery with responsive design.',
        tags: ['React.js', 'Tailwind CSS', 'CSS'],
        live: 'https://pragmati-ccoders.vercel.app/',
        github: 'https://github.com/surinder2003k/PragmatiCcoders.',
        gradient: 'linear-gradient(135deg, #00d4aa, #38bdf8)',
        initials: 'PC',
    },
    {
        title: 'AdminCart',
        desc: 'Admin dashboard for cart management with a clean, modern interface. Built with JavaScript and deployed on Vercel.',
        tags: ['JavaScript', 'CSS', 'Node.js'],
        live: 'https://admin-cart.vercel.app/',
        github: 'https://github.com/surinder2003k/AdminCart',
        gradient: 'linear-gradient(135deg, #ff6b9d, #f59e0b)',
        initials: 'AC',
    },
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
                        A growing collection of projects built with vibe coding &mdash; from AI-powered tools to full-stack apps.
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
                                    transition: { delay: i * 0.1, duration: 0.6 },
                                },
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="project-image" style={{ background: project.gradient }} aria-hidden="true">
                                {project.vibeCoded && (
                                    <span style={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        background: 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '4px 10px',
                                        borderRadius: 20,
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4,
                                        zIndex: 2,
                                    }}>
                                        <Sparkles size={12} /> VIBE CODED
                                    </span>
                                )}
                                {project.initials}
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, ti) => (
                                    <span key={ti} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>

                            <div className="project-links">
                                {project.live && project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link live"
                                        aria-label={`View live demo of ${project.title} (opens in new tab)`}
                                    >
                                        <ExternalLink size={16} aria-hidden="true" /> Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link code"
                                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                                >
                                    <Github size={16} aria-hidden="true" /> Source Code
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}