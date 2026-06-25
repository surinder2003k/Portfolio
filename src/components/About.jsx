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
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const aboutCards = [
    {
        icon: <Code2 size={28} aria-hidden="true" />,
        title: 'Frontend Dev',
        desc: 'React, Tailwind, Responsive UI',
    },
    {
        icon: <Layers size={28} aria-hidden="true" />,
        title: 'Backend Dev',
        desc: 'Node.js, Express, REST APIs',
    },
    {
        icon: <Search size={28} aria-hidden="true" />,
        title: 'SEO Expert',
        desc: 'Google Analytics, Digital Marketing',
    },
    {
        icon: <Lightbulb size={28} aria-hidden="true" />,
        title: 'Problem Solver',
        desc: 'Critical Thinking, Leadership',
    },
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
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        About <span className="gradient-text">Me</span>
                    </motion.h2>

                    <motion.p className="about-text" variants={fadeUp}>
                        I'm a passionate MERN Stack Developer from Mohali, Punjab with a
                        Bachelor's degree in Computer Application from Rayat Bahra University
                        (2022&ndash;2025). I thrive on building practical, efficient web apps and
                        constantly push myself to learn the latest technologies.
                    </motion.p>

                    <motion.div className="about-details" variants={fadeUp}>
                        <div className="about-detail-item">
                            <div className="about-detail-icon" aria-hidden="true"><MapPin size={20} /></div>
                            <div>
                                <div className="about-detail-label">Location</div>
                                <div className="about-detail-value">Mohali (Kharar), Punjab</div>
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
                                <div className="about-detail-label">Degree</div>
                                <div className="about-detail-value">BCA &ndash; 7.82 CGPA</div>
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
                        Hire Me <Mail size={18} aria-hidden="true" />
                    </motion.a>
                </motion.div>

                <motion.div
                    className="about-cards"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
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
            </div>
        </section>
    );
}