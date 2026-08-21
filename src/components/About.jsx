import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    MapPin,
    Mail,
    GraduationCap,
    Globe,
    Code2,
    Layers,
    Search,
    Lightbulb,
    Coffee,
    Terminal,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const aboutCards = [
    {
        icon: <Code2 size={28} aria-hidden="true" />,
        title: 'Frontend Craft',
        desc: 'React, Next.js, Tailwind, TypeScript — pixel-perfect, accessible UIs',
    },
    {
        icon: <Layers size={28} aria-hidden="true" />,
        title: 'Backend Logic',
        desc: 'Node.js, Express, REST APIs, MongoDB — scalable, clean architecture',
    },
    {
        icon: <Search size={28} aria-hidden="true" />,
        title: 'SEO & Growth',
        desc: 'Technical SEO, Core Web Vitals, Analytics, Content strategy that ranks',
    },
    {
        icon: <Lightbulb size={28} aria-hidden="true" />,
        title: 'Problem Solver',
        desc: 'Debugging complex issues, system design, mentoring juniors',
    },
];

const funFacts = [
    { icon: <Coffee size={20} aria-hidden="true" />, label: 'Coffee/week', value: '14+' },
    { icon: <Terminal size={20} aria-hidden="true" />, label: 'Lines of code', value: '500k+' },
    { icon: <Code2 size={20} aria-hidden="true" />, label: 'Side projects', value: '12+' },
    { icon: <Globe size={20} aria-hidden="true" />, label: 'Countries reached', value: '8+' },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section about" id="about" ref={ref} aria-label="About me">
            <div className="container">
                <motion.div
                    className="about-info"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        About Me
                    </motion.h2>

                    <motion.p className="about-text" variants={fadeUp}>
                        I'm Surinder — a self-taught developer who started coding because I wanted to build 
                        my own ideas instead of waiting for someone else to. What began as curiosity in 2021 
                        turned into a full-time obsession with the MERN stack.
                    </motion.p>
                    
                    <motion.p className="about-text" variants={fadeUp}>
                        Since then, I've shipped 15+ production applications, helped businesses rank on page 1 of Google,
                        and learned that the best code is the code that solves real problems for real people. 
                        My degree (BCA, 7.82 CGPA) gave me the theory — freelance work and late-night builds gave me the practice.
                    </motion.p>

                    <motion.div className="about-details" variants={fadeUp}>
                        <div className="about-detail-item">
                            <div className="about-detail-icon" aria-hidden="true"><MapPin size={20} /></div>
                            <div>
                                <div className="about-detail-label">Based in</div>
                                <div className="about-detail-value">Mohali (Kharar), Punjab, India</div>
                            </div>
                        </div>
                        <div className="about-detail-item">
                            <div className="about-detail-icon" aria-hidden="true"><Mail size={20} /></div>
                            <div>
                                <div className="about-detail-label">Email</div>
                                <div className="about-detail-value">surinder2003k@gmail.com</div>
                            </div>
                        </div>
                        <div className="about-detail-item">
                            <div className="about-detail-icon" aria-hidden="true"><GraduationCap size={20} /></div>
                            <div>
                                <div className="about-detail-label">Education</div>
                                <div className="about-detail-value">BCA, Rayat Bahra University (2022–2025)</div>
                            </div>
                        </div>
                        <div className="about-detail-item">
                            <div className="about-detail-icon" aria-hidden="true"><Globe size={20} /></div>
                            <div>
                                <div className="about-detail-label">Languages</div>
                                <div className="about-detail-value">English, Punjabi, Hindi</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.a
                        href="mailto:surinder2003k@gmail.com"
                        className="btn-primary"
                        variants={fadeUp}
                        aria-label="Send email to surinder2003k@gmail.com"
                    >
                        Let's Collaborate <Mail size={18} aria-hidden="true" />
                    </motion.a>
                </motion.div>

                <motion.div
                    className="about-cards"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
                >
                    {aboutCards.map((card, i) => (
                        <motion.div
                            key={i}
                            className="glass-card about-card"
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="about-card-icon" aria-hidden="true">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="about-fun-facts"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
                >
                    {funFacts.map((fact, i) => (
                        <motion.div key={i} className="fun-fact" variants={fadeUp}>
                            <div className="fun-fact-icon" aria-hidden="true">{fact.icon}</div>
                            <div className="fun-fact-value">{fact.value}</div>
                            <div className="fun-fact-label">{fact.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}