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
            { name: 'React.js', level: 95 },
            { name: 'Next.js', level: 90 },
            { name: 'TypeScript', level: 88 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'HTML5 / CSS3', level: 98 },
            { name: 'JavaScript (ES6+)', level: 95 },
            { name: 'Framer Motion', level: 90 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', level: 92 },
            { name: 'Express.js', level: 90 },
            { name: 'MongoDB', level: 90 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'REST APIs', level: 95 },
            { name: 'JWT / Auth', level: 88 },
        ],
    },
    {
        title: 'DevOps & Tools',
        skills: [
            { name: 'Git / GitHub', level: 95 },
            { name: 'Vercel / Netlify', level: 95 },
            { name: 'Docker', level: 70 },
            { name: 'CI/CD (GitHub Actions)', level: 80 },
            { name: 'Vite / Webpack', level: 85 },
        ],
    },
    {
        title: 'SEO & Marketing',
        skills: [
            { name: 'Technical SEO', level: 92 },
            { name: 'Google Analytics 4', level: 90 },
            { name: 'Search Console', level: 95 },
            { name: 'Core Web Vitals', level: 88 },
            { name: 'Keyword Research', level: 85 },
            { name: 'Content Strategy', level: 82 },
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
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">My Toolkit</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Technologies I reach for daily. Levels reflect real project experience — not tutorial completion.
                    </p>
                </motion.div>

                <div className="skills-editorial">
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={ci}
                            className="skill-editorial-block"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: ci * 0.1 } } }}
                        >
                            <h3 className="skill-editorial-title">{category.title}</h3>
                            <div className="skill-editorial-list">
                                {category.skills.map((skill, si) => (
                                    <motion.div
                                        key={si}
                                        className="skill-row"
                                        variants={fadeUp}
                                    >
                                        <div className="skill-row-head">
                                            <span className="skill-row-name">{skill.name}</span>
                                            <span className="skill-row-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar" aria-hidden="true">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ scaleX: 0 }}
                                                animate={isInView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                                                transition={{ delay: ci * 0.1 + si * 0.06 + 0.15, duration: 0.7, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
