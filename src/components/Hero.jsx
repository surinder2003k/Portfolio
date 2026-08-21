import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Code2, Server, Palette, Sparkles } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
    }),
};

const DEFAULTS = {
    greeting: 'Hey there, I\'m',
    name: 'Surinder Kumar',
    role: 'Full Stack MERN Developer • SEO Specialist • AI Enthusiast',
    description: 'I turn coffee into clean code. Building production-ready web apps with React, Node.js & MongoDB since 2022. When I\'m not debugging at 2 AM, I\'m optimizing sites for search rankings or experimenting with AI tools. Based in Mohali, Punjab — shipping worldwide 🌍',
    stats: [
        { value: '15+', label: 'Projects Shipped' },
        { value: '3+', label: 'Years Coding' },
        { value: '50+', label: 'Happy Clients' },
    ],
};

function loadHero() {
    try {
        const raw = localStorage.getItem('portfolio-content');
        if (raw) {
            const c = JSON.parse(raw);
            if (c.hero) return { ...DEFAULTS, ...c.hero };
        }
    } catch {
        /* ignore parse errors, fall back to default */
    }
    return DEFAULTS;
}

export default function Hero() {
    const [content] = useStateInit(loadHero);
    const nameParts = content.name.split(' ');

    return (
        <section className="hero" id="hero" aria-label="Hero introduction">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.div className="hero-badge" variants={fadeUp} custom={0}>
                        <Sparkles size={14} color="var(--signature-coral)" aria-hidden="true" className="pulse" />
                        Available for freelance & full-time roles
                    </motion.div>

                    <motion.p className="hero-greeting" variants={fadeUp} custom={1}>
                        {content.greeting}
                    </motion.p>

                    <motion.h1 variants={fadeUp} custom={2}>
                        {nameParts.map((w, i) => (
                            <span key={i} style={{ color: i === nameParts.length - 1 ? 'var(--primary)' : 'inherit' }}>
                                {w}{i < nameParts.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p className="hero-role" variants={fadeUp} custom={3}>
                        {content.role}
                    </motion.p>

                    <motion.p className="hero-description" variants={fadeUp} custom={4}>
                        {content.description}
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeUp} custom={5}>
                        <Link to="contact" smooth duration={500} offset={-80}>
                            <button className="btn-primary" aria-label="Navigate to contact section">
                                Let's Build Something
                                <ArrowDown size={18} aria-hidden="true" />
                            </button>
                        </Link>
                        <Link to="projects" smooth duration={500} offset={-80}>
                            <button className="btn-outline" aria-label="Navigate to projects section">
                                See My Work
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="hero-stats" variants={fadeUp} custom={6}>
                        {content.stats.map((s, i) => (
                            <div className="hero-stat" key={i}>
                                <h3>{s.value}</h3>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                    role="img"
                    aria-label="Surinder Kumar developer avatar with floating tech badges"
                >
                    <div className="hero-avatar-wrapper">
                        <div className="hero-avatar-ring" aria-hidden="true" />
                        <div className="hero-avatar" aria-hidden="true">
                            {nameParts[0]?.[0] || 'S'}{nameParts[nameParts.length - 1]?.[0] || 'K'}
                        </div>

                        <motion.div className="hero-floating-badge floating-badge-1" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}>
                            <Code2 size={16} color="#61dafb" aria-hidden="true" /> React.js
                        </motion.div>
                        <motion.div className="hero-floating-badge floating-badge-2" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}>
                            <Server size={16} color="#68a063" aria-hidden="true" /> Node.js
                        </motion.div>
                        <motion.div className="hero-floating-badge floating-badge-3" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 2 }}>
                            <Palette size={16} color="#4db33d" aria-hidden="true" /> MongoDB
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// small helper so components read once at mount (editor saves + reload shows new values)
function useStateInit(fn) {
    const [v] = useState(fn);
    return [v];
}