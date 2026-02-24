import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
    {
        title: 'Paste App (Notes)',
        desc: 'A feature-rich notes/paste application built with React.js and Tailwind CSS. Allows creating, editing, and managing text snippets with a clean, modern UI.',
        tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
        live: 'https://paste-app-gamma-peach.vercel.app/',
        gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        initials: 'PA',
    },
    {
        title: 'PragmaticCoders (Clone)',
        desc: 'A pixel-perfect clone of PragmaticCoders website showcasing frontend skills. Built from scratch with React.js and Tailwind CSS with responsive design.',
        tags: ['React.js', 'Tailwind CSS', 'CSS'],
        live: 'https://pragmati-ccoders.vercel.app/',
        gradient: 'linear-gradient(135deg, #00d4aa, #38bdf8)',
        initials: 'PC',
    },
    {
        title: 'Portfolio Website',
        desc: 'A personal portfolio website showcasing projects, skills, and experience. Built with HTML, CSS, JavaScript and PHP with responsive design.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        live: 'https://surinder.free.nf',
        gradient: 'linear-gradient(135deg, #ff6b9d, #f59e0b)',
        initials: 'PW',
    },
    {
        title: 'Starlink Installation Website',
        desc: 'A clean and modern informational website built with HTML, CSS, and JavaScript. Features responsive layouts and smooth user interactions.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        gradient: 'linear-gradient(135deg, #38bdf8, #6c63ff)',
        initials: 'SI',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="projects" ref={ref}>
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
                        A selection of projects I&apos;ve built – from full-stack apps to responsive web experiences.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="glass-card project-card"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: i * 0.15, duration: 0.6 },
                                },
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="project-image" style={{ background: project.gradient }}>
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
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link live"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                                <a
                                    href="https://github.com/surinder2003k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link code"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
