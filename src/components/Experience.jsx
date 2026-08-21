import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timeline = [
    {
        date: '2024 – Present',
        title: 'Freelance Full Stack Developer',
        org: 'Self-Employed / Various Clients',
        desc: 'Building custom web apps for startups and SMEs. Delivered 15+ projects — e-commerce, SaaS dashboards, AI-integrated tools. Stack: React, Next.js, Node.js, MongoDB, Tailwind. 40% faster load times and 3× conversion lifts for clients.',
        type: 'work',
        typeLabel: 'Work',
    },
    {
        date: '2023 – 2024',
        title: 'MERN Stack Developer Intern',
        org: 'Meander Software, Mohali',
        desc: '6-month intensive program. Shipped 5 full-stack apps from scratch, learned production-grade practices, Git workflows, API design and DB optimization. Final project: real-time chat app with Socket.io.',
        type: 'internship',
        typeLabel: 'Internship',
    },
    {
        date: '2023',
        title: 'Digital Marketing (SEO) Intern',
        org: 'Securehack, Remote',
        desc: 'Technical SEO, on-page optimization and Google Analytics. Improved organic traffic by 65% for client sites. Hands-on with Search Console, keyword research and Core Web Vitals.',
        type: 'internship',
        typeLabel: 'Internship',
    },
    {
        date: '2022 – 2025',
        title: 'Bachelor of Computer Application (BCA)',
        org: 'Rayat Bahra University, Mohali',
        desc: 'CGPA 7.82/10. Data Structures, Algorithms, DBMS, Computer Networks, Web Technologies. Final-year project: AI-powered resume analyzer in Python/React.',
        type: 'education',
        typeLabel: 'Education',
    },
    {
        date: '2022',
        title: 'Python Development Training',
        org: 'Solitaire Infosys, Jalandhar',
        desc: '45-day intensive Python course — OOP, data structures, automation and web scraping. Built a CLI task manager and automated reporting tool.',
        type: 'training',
        typeLabel: 'Training',
    },
];

const typeIcon = {
    work: Briefcase,
    internship: GraduationCap,
    training: Code2,
    education: GraduationCap,
};

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="experience" ref={ref} aria-label="Work experience and education timeline">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">Experience &amp; Journey</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From my first console.log to shipping production apps — here's the path so far.
                    </p>
                </motion.div>

                <div className="exp-timeline">
                    {timeline.map((item, i) => {
                        const Icon = typeIcon[item.type];
                        return (
                            <motion.div
                                key={i}
                                className="exp-item"
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } },
                                }}
                            >
                                <div className="exp-marker" aria-hidden="true">
                                    <Icon size={18} />
                                </div>
                                <div className="exp-body glass-card">
                                    <div className="exp-top">
                                        <span className="exp-date">{item.date}</span>
                                        <span className={`exp-tag exp-tag-${item.type}`}>{item.typeLabel}</span>
                                    </div>
                                    <h3 className="exp-title">{item.title}</h3>
                                    <p className="exp-org">{item.org}</p>
                                    <p className="exp-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
