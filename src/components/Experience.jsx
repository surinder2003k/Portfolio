import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timelineData = [
    {
        date: '2022 – 2025',
        title: 'Bachelor of Computer Application',
        org: 'Rayat Bahra University',
        desc: 'Focused on building practical and efficient web applications. Explored MERN stack development and hands-on project experience. CGPA: 7.82',
    },
    {
        date: '6 Months',
        title: 'MERN Stack Training',
        org: 'Meander Software',
        desc: 'Intensive training on MongoDB, Express.js, React, and Node.js. Built full-stack applications and learned industry best practices.',
    },
    {
        date: '45 Days',
        title: 'Python Training',
        org: 'Solitaire Infosys',
        desc: 'Hands-on Python programming training covering core concepts, scripting, and automation.',
    },
    {
        date: '2 Months',
        title: 'Digital Marketing (SEO) Internship',
        org: 'Securehack',
        desc: 'Practical experience in Search Engine Optimization, Google Analytics, and digital marketing strategies.',
    },
    {
        date: '2022',
        title: 'High School – 84.05%',
        org: 'Pathseekers School, Beas',
        desc: 'Completed senior secondary education with distinction.',
    },
    {
        date: '2020',
        title: 'Matriculation – 79%',
        org: 'Pathseekers School, Beas',
        desc: 'Completed matriculation with excellent academic performance.',
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="experience" ref={ref}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        Education &amp; <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        My academic journey and professional training that shaped my career as a developer.
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {timelineData.map((item, i) => (
                        <motion.div
                            key={i}
                            className="timeline-item"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: i * 0.15, duration: 0.5 },
                                },
                            }}
                        >
                            <div className="timeline-dot" />
                            <span className="timeline-date">{item.date}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-org">{item.org}</p>
                            <p className="timeline-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
