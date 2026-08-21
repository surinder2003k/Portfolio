import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, MapPin, Code2, Server, Palette, Database } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

const DEFAULTS = {
    greeting: 'Hey there, I’m',
    name: 'Surinder Kumar',
    role: 'Full Stack MERN Developer · SEO Specialist · AI Enthusiast',
    description: 'I turn coffee into clean code. Building production-ready web apps with React, Node.js & MongoDB since 2022. When I’m not debugging at 2 AM, I’m optimizing sites for search rankings or experimenting with AI tools. Based in Mohali, Punjab — shipping worldwide.',
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

const techChips = [
    { icon: Code2, label: 'React.js', color: '#61dafb' },
    { icon: Server, label: 'Node.js', color: '#68a063' },
    { icon: Database, label: 'MongoDB', color: '#4db33d' },
    { icon: Palette, label: 'UI/UX', color: '#f59e0b' },
];

export default function Hero() {
    const [content] = useStateInit(loadHero);
    const nameParts = content.name.split(' ');

    return (
        <section className="hero" id="hero" aria-label="Hero introduction">
            <div className="container hero-editorial">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.div className="hero-badge" variants={fadeUp} custom={0}>
                        <span className="hero-badge-dot" aria-hidden="true" />
                        Available for freelance &amp; full-time roles
                    </motion.div>

                    <motion.p className="hero-greeting" variants={fadeUp} custom={1}>
                        {content.greeting}
                    </motion.p>

                    <motion.h1 variants={fadeUp} custom={2}>
                        {nameParts.map((w, i) => (
                            <span key={i} className={i === nameParts.length - 1 ? 'hero-name-accent' : undefined}>
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

                    <motion.div className="hero-meta" variants={fadeUp} custom={5}>
                        <MapPin size={15} aria-hidden="true" />
                        <span>Mohali, Punjab · Open to remote</span>
                    </motion.div>

                    <motion.div className="hero-actions" variants={fadeUp} custom={6}>
                        <Link to="contact" smooth duration={500} offset={-80}>
                            <button className="btn-primary" aria-label="Navigate to contact section">
                                Let’s Build Something
                                <ArrowDown size={18} aria-hidden="true" />
                            </button>
                        </Link>
                        <Link to="projects" smooth duration={500} offset={-80}>
                            <button className="btn-outline" aria-label="Navigate to projects section">
                                See My Work
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div className="hero-stats" variants={fadeUp} custom={7}>
                        {content.stats.map((s, i) => (
                            <div className="hero-stat" key={i}>
                                <h3>{s.value}</h3>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.aside
                    className="hero-aside"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
                    aria-label="Tech I work with"
                >
                    <div className="hero-card">
                        <p className="hero-card-eyebrow">Currently shipping with</p>
                        <ul className="hero-tech-list">
                            {techChips.map((t, i) => {
                                const Icon = t.icon;
                                return (
                                    <li className="hero-tech-item" key={i}>
                                        <span className="hero-tech-icon" style={{ color: t.color, borderColor: t.color }} aria-hidden="true">
                                            <Icon size={18} />
                                        </span>
                                        <span className="hero-tech-label">{t.label}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="hero-card-divider" />
                        <p className="hero-card-note">
                            Production apps · SEO-optimized · AI-powered · Deployed worldwide
                        </p>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}

// small helper so components read once at mount (editor saves + reload shows new values)
function useStateInit(fn) {
    const [v] = useState(fn);
    return [v];
}
