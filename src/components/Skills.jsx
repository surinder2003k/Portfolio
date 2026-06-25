import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', color: '#e34c26' },
            { name: 'CSS3', color: '#264de4' },
            { name: 'JavaScript', color: '#f0db4f' },
            { name: 'React.js', color: '#61dafb' },
            { name: 'Tailwind', color: '#38bdf8' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', color: '#68a063' },
            { name: 'Express.js', color: '#888' },
            { name: 'MongoDB', color: '#4db33d' },
        ],
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git', color: '#f05032' },
            { name: 'GitHub', color: '#6e5494' },
            { name: 'SEO', color: '#00d4aa' },
            { name: 'Analytics', color: '#e37400' },
        ],
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Leadership', color: '#6c63ff' },
            { name: 'Teamwork', color: '#00d4aa' },
            { name: 'Problem Solving', color: '#ff6b9d' },
            { name: 'Time Mgmt', color: '#a855f7' },
            { name: 'Critical Thinking', color: '#f59e0b' },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="skills" ref={ref} aria-label="Skills and technologies">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '10px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                {skillCategories.map((category, ci) => (
                    <div key={ci} className="skill-category-section">
                        <motion.h3
                            className="skill-category-title"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: ci * 0.1, duration: 0.5 } } }}
                        >
                            {category.title}
                        </motion.h3>

                        <div className="skills-grid" style={{ marginTop: '16px' }}>
                            {category.skills.map((skill, si) => (
                                <motion.div
                                    key={si}
                                    className="glass-card skill-card"
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: { delay: ci * 0.1 + si * 0.06, duration: 0.4 },
                                        },
                                    }}
                                    whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div
                                        className="skill-icon"
                                        style={{ background: `${skill.color}20`, color: skill.color }}
                                        aria-hidden="true"
                                    >
                                        {skill.name.slice(0, 2).toUpperCase()}
                                    </div>
                                    <h4>{skill.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}