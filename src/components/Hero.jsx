import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Code2, Server, Palette } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-grid" />
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <motion.div className="hero-badge" variants={fadeUp} custom={0}>
                        <span className="pulse" />
                        Available for Work
                    </motion.div>

                    <motion.p className="hero-greeting" variants={fadeUp} custom={1}>
                        Hello, I&apos;m
                    </motion.p>

                    <motion.h1 variants={fadeUp} custom={2}>
                        Surinder <span className="gradient-text">Kumar</span>
                    </motion.h1>

                    <motion.p className="hero-role" variants={fadeUp} custom={3}>
                        Full Stack MERN Developer
                    </motion.p>

                    <motion.p className="hero-description" variants={fadeUp} custom={4}>
                        Passionate about building practical, efficient web applications with React,
                        Node.js, MongoDB &amp; Express.js. I craft clean, optimized code and keep
                        pushing the boundaries of modern web tech.
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeUp} custom={5}>
                        <Link to="contact" smooth duration={500} offset={-80}>
                            <button className="btn-primary">
                                Let&apos;s Talk
                                <ArrowDown size={18} />
                            </button>
                        </Link>
                        <Link to="projects" smooth duration={500} offset={-80}>
                            <button className="btn-outline">View Projects</button>
                        </Link>
                    </motion.div>

                    <motion.div className="hero-stats" variants={fadeUp} custom={6}>
                        <div className="hero-stat">
                            <h3>5+</h3>
                            <p>Projects</p>
                        </div>
                        <div className="hero-stat">
                            <h3>6+</h3>
                            <p>Certificates</p>
                        </div>
                        <div className="hero-stat">
                            <h3>3</h3>
                            <p>Internships</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-ring" />
                        <div className="hero-avatar">SK</div>

                        <motion.div
                            className="hero-floating-badge floating-badge-1"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        >
                            <Code2 size={18} color="#6c63ff" /> React.js
                        </motion.div>

                        <motion.div
                            className="hero-floating-badge floating-badge-2"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                        >
                            <Server size={18} color="#00d4aa" /> Node.js
                        </motion.div>

                        <motion.div
                            className="hero-floating-badge floating-badge-3"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
                        >
                            <Palette size={18} color="#ff6b9d" /> MongoDB
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
