import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
    {
        title: 'XyloSai',
        desc: 'AI-powered platform combining modern design with intelligent features for seamless user experiences.',
        tags: ['React.js', 'AI', 'Tailwind CSS'],
        live: 'https://xylosai.vercel.app/',
        github: 'https://github.com/surinder2003k/xylosai',
        gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        initials: 'XL',
    },
    {
        title: 'PulseAI',
        desc: 'AI-powered blog & analytics platform providing real-time insights and content generation.',
        tags: ['React.js', 'AI', 'Blog'],
        live: 'https://pulse-blog-ai.vercel.app/',
        github: 'https://github.com/surinder2003k/pulseai',
        gradient: 'linear-gradient(135deg, #00d4aa, #38bdf8)',
        initials: 'PA',
    },
    {
        title: 'PathSeekers',
        desc: 'Modern educational platform helping students discover and navigate their learning journey.',
        tags: ['React.js', 'Node.js', 'MongoDB'],
        live: 'https://pathseekers.vercel.app/',
        github: 'https://github.com/surinder2003k/pathseekers',
        gradient: 'linear-gradient(135deg, #ff6b9d, #f59e0b)',
        initials: 'PS',
    },
    {
        title: 'Xeloria',
        desc: 'Next-gen web experience showcasing what\'s possible with modern web technologies.',
        tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
        live: 'https://xeloria.vercel.app/',
        github: 'https://github.com/surinder2003k/xeloria',
        gradient: 'linear-gradient(135deg, #38bdf8, #6c63ff)',
        initials: 'XR',
    },
    {
        title: 'PostingApp',
        desc: 'Full-stack posting application with CRUD operations built with EJS and Node.js.',
        tags: ['EJS', 'Node.js', 'MongoDB'],
        live: 'https://posting-app-eight.vercel.app',
        github: 'https://github.com/surinder2003k/PostingApp',
        gradient: 'linear-gradient(135deg, #e34c26, #f0db4f)',
        initials: 'PO',
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
                        A selection of projects I've built &mdash; from AI-powered tools to full-stack applications.
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
                                    transition: { delay: i * 0.15, duration: 0.6 },
                                },
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="project-image" style={{ background: project.gradient }} aria-hidden="true">
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
                                    aria-label={`View source code on GitHub`}
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