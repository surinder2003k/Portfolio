import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Code2, Globe, Star } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const workExperience = [
    {
        date: '2024 – Present',
        title: 'Freelance Full Stack Developer',
        org: 'Self-Employed / Various Clients',
        desc: 'Building custom web applications for startups and SMEs. Delivered 15+ projects including e-commerce platforms, SaaS dashboards, and AI-integrated tools. Stack: React, Next.js, Node.js, MongoDB, Tailwind. Achieved 40% faster load times and 3x conversion improvements for clients.',
        type: 'work',
    },
    {
        date: '2023 – 2024',
        title: 'MERN Stack Developer Intern',
        org: 'Meander Software, Mohali',
        desc: 'Intensive 6-month training program. Built 5 full-stack applications from scratch. Learned production-grade code practices, Git workflows, API design, and database optimization. Final project: Real-time chat app with Socket.io.',
        type: 'internship',
    },
    {
        date: '2023',
        title: 'Digital Marketing (SEO) Intern',
        org: 'Securehack, Remote',
        desc: '2-month internship focusing on technical SEO, on-page optimization, and Google Analytics. Improved organic traffic by 65% for client sites. Hands-on with Search Console, keyword research, and Core Web Vitals optimization.',
        type: 'internship',
    },
    {
        date: '2022',
        title: 'Python Development Training',
        org: 'Solitaire Infosys, Jalandhar',
        desc: '45-day intensive Python course covering OOP, data structures, automation scripts, and web scraping with BeautifulSoup. Built a CLI task manager and automated reporting tool.',
        type: 'training',
    },
];

const education = [
    {
        date: '2022 – 2025',
        title: 'Bachelor of Computer Application (BCA)',
        org: 'Rayat Bahra University, Mohali',
        desc: 'CGPA: 7.82/10. Core subjects: Data Structures, Algorithms, DBMS, Computer Networks, Web Technologies. Final year project: AI-powered resume analyzer using Python/React.',
        type: 'education',
    },
    {
        date: '2020',
        title: 'Senior Secondary (Class 12) – 84.05%',
        org: 'Pathseekers School, Beas',
        desc: 'Science stream with Computer Science. Top 5% in district. Active in coding club and tech fest organization.',
        type: 'education',
    },
    {
        date: '2018',
        title: 'Matriculation (Class 10) – 79%',
        org: 'Pathseekers School, Beas',
        desc: 'Strong foundation in mathematics and sciences. Early interest in programming sparked here.',
        type: 'education',
    },
];

const achievements = [
    { icon: <Star size={20} />, title: 'Top 10% in University', desc: 'Consistent academic performer across all semesters' },
    { icon: <Award size={20} />, title: 'Hackathon Finalist', desc: 'Smart India Hackathon 2024 – Built an agri-tech solution' },
    { icon: <Code2 size={20} />, title: 'Open Source Contributor', desc: 'Regular contributions to React ecosystem libraries' },
    { icon: <Globe size={20} />, title: 'Global Client Base', desc: 'Worked with clients from US, UK, Australia, UAE' },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeTab, setActiveTab] = useState('all');

    const typeIcons = {
        work: <Briefcase size={18} />,
        internship: <GraduationCap size={18} />,
        training: <Code2 size={18} />,
        education: <GraduationCap size={18} />,
    };

    const typeColors = {
        work: 'var(--text-secondary)',
        internship: 'var(--primary)',
        training: 'var(--signature-coral)',
        education: '#38bdf8',
    };

    const allItems = [...workExperience, ...education];

    const filteredItems = allItems.filter(item => 
        activeTab === 'all' || item.type === activeTab
    );

    return (
        <section className="section" id="experience" ref={ref} aria-label="Work experience and education timeline">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        Experience & Journey
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From writing my first <code>console.log</code> to shipping production apps — here's the path.
                    </p>
                </motion.div>

                <div className="experience-tabs" role="tablist" aria-label="Filter experience">
                    <button
                        role="tab"
                        aria-selected={activeTab === 'all'}
                        onClick={() => setActiveTab('all')}
                        className={`experience-tab ${activeTab === 'all' ? 'active' : ''}`}
                    >
                        All
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'work'}
                        onClick={() => setActiveTab('work')}
                        className={`experience-tab ${activeTab === 'work' ? 'active' : ''}`}
                    >
                        Work
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'internship'}
                        onClick={() => setActiveTab('internship')}
                        className={`experience-tab ${activeTab === 'internship' ? 'active' : ''}`}
                    >
                        Internships
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'education'}
                        onClick={() => setActiveTab('education')}
                        className={`experience-tab ${activeTab === 'education' ? 'active' : ''}`}
                    >
                        Education
                    </button>
                </div>

                <div className="experience-timeline" id="experience-timeline">
                    {filteredItems.map((item, i) => (
                        <motion.div
                            key={`${item.type}-${i}`}
                            className="timeline-item"
                            data-type={item.type}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: i * 0.12, duration: 0.5 },
                                },
                            }}
                        >
                            <div className="timeline-dot" aria-hidden="true" style={{ background: typeColors[item.type] }} />
                            <time className="timeline-date" style={{ background: `${typeColors[item.type]}20`, color: typeColors[item.type], border: `1px solid ${typeColors[item.type]}40` }}>
                                {typeIcons[item.type]}
                                <span style={{ marginLeft: '8px' }}>{item.date}</span>
                            </time>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-org">{item.org}</p>
                            <p className="timeline-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="achievements-grid"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                    style={{ marginTop: '60px' }}
                >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                        Highlights
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {achievements.map((achievement, i) => (
                            <motion.div
                                key={i}
                                className="glass-card"
                                style={{ textAlign: 'center', padding: '28px 20px' }}
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            >
                                <div className="about-card-icon" aria-hidden="true" style={{ marginBottom: '16px' }}>{achievement.icon}</div>
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>{achievement.title}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{achievement.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}