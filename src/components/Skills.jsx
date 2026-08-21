import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillCategories = [
    {
        title: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React.js', level: 95, color: '#61dafb', years: 3 },
            { name: 'Next.js', level: 90, color: '#000000', years: 2 },
            { name: 'TypeScript', level: 88, color: '#3178c6', years: 2 },
            { name: 'Tailwind CSS', level: 95, color: '#38bdf8', years: 3 },
            { name: 'HTML5 / CSS3', level: 98, color: '#e34c26', years: 4 },
            { name: 'JavaScript (ES6+)', level: 95, color: '#f0db4f', years: 4 },
            { name: 'Framer Motion', level: 90, color: '#0055ff', years: 2 },
            { name: 'Redux / Zustand', level: 85, color: '#764abc', years: 2 },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 92, color: '#68a063', years: 3 },
            { name: 'Express.js', level: 90, color: '#888', years: 3 },
            { name: 'MongoDB', level: 90, color: '#4db33d', years: 3 },
            { name: 'PostgreSQL', level: 75, color: '#336791', years: 1 },
            { name: 'REST APIs', level: 95, color: '#ff6b35', years: 3 },
            { name: 'GraphQL', level: 70, color: '#e10098', years: 1 },
            { name: 'Socket.io', level: 80, color: '#010101', years: 2 },
            { name: 'JWT / Auth', level: 88, color: '#eb5424', years: 2 },
        ],
    },
    {
        title: 'DevOps & Tools',
        icon: '🚀',
        skills: [
            { name: 'Git / GitHub', level: 95, color: '#f05032', years: 4 },
            { name: 'Vercel / Netlify', level: 95, color: '#000', years: 3 },
            { name: 'Docker', level: 70, color: '#2496ed', years: 1 },
            { name: 'CI/CD (GitHub Actions)', level: 80, color: '#2088ff', years: 2 },
            { name: 'Vite / Webpack', level: 85, color: '#646cff', years: 3 },
            { name: 'ESLint / Prettier', level: 90, color: '#4b32c3', years: 3 },
            { name: 'VS Code', level: 98, color: '#007acc', years: 4 },
            { name: 'Chrome DevTools', level: 95, color: '#4285f4', years: 4 },
        ],
    },
    {
        title: 'SEO & Marketing',
        icon: '📈',
        skills: [
            { name: 'Technical SEO', level: 92, color: '#00d4aa', years: 2 },
            { name: 'Google Analytics 4', level: 90, color: '#e37400', years: 2 },
            { name: 'Search Console', level: 95, color: '#4285f4', years: 2 },
            { name: 'Core Web Vitals', level: 88, color: '#34a853', years: 2 },
            { name: 'Keyword Research', level: 85, color: '#ea4335', years: 2 },
            { name: 'Schema Markup', level: 80, color: '#6c63ff', years: 1 },
            { name: 'Content Strategy', level: 82, color: '#a855f7', years: 2 },
            { name: 'Page Speed Optimization', level: 90, color: '#f59e0b', years: 2 },
        ],
    },
    {
        title: 'Soft Skills',
        icon: '🤝',
        skills: [
            { name: 'Problem Solving', level: 95, color: '#ff6b9d', years: 4 },
            { name: 'Communication', level: 90, color: '#00d4aa', years: 4 },
            { name: 'Time Management', level: 88, color: '#a855f7', years: 3 },
            { name: 'Adaptability', level: 92, color: '#f59e0b', years: 3 },
            { name: 'Team Collaboration', level: 85, color: '#6c63ff', years: 3 },
            { name: 'Code Review', level: 88, color: '#10b981', years: 2 },
            { name: 'Mentoring', level: 75, color: '#f97316', years: 1 },
            { name: 'Client Handling', level: 85, color: '#ec4899', years: 2 },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [expandedCategories, setExpandedCategories] = useState(new Set([0, 1]));

    const toggleCategory = (index) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const getAvgLevel = (skills) => Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length);

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
                        My Toolkit
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Technologies I use daily. Levels reflect real project experience — not tutorial completion.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setExpandedCategories(new Set(skillCategories.map((_, i) => i)))}
                        className="btn-outline"
                        style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                        Expand All
                    </button>
                    <button
                        onClick={() => setExpandedCategories(new Set())}
                        className="btn-outline"
                        style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                        Collapse All
                    </button>
                </div>

                {skillCategories.map((category, ci) => {
                    const isExpanded = expandedCategories.has(ci);
                    const avgLevel = getAvgLevel(category.skills);
                    
                    return (
                        <div key={ci} className="skill-category-section" style={{ marginBottom: '40px' }}>
                            <button
                                onClick={() => toggleCategory(ci)}
                                className="skill-category-title"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none',
                                    color: 'inherit',
                                    font: 'inherit',
                                    padding: '0',
                                    width: '100%',
                                    textAlign: 'left',
                                }}
                                aria-expanded={isExpanded}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                                    <span>{category.title}</span>
                                </span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-display)',
                                        background: category.skills[0].color,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>
                                        {avgLevel}%
                                    </span>
                                    {isExpanded ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, paddingTop: isExpanded ? '24px' : 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="skills-grid" style={{ marginTop: '16px' }}>
                                    {category.skills.map((skill, si) => (
                                        <motion.div
                                            key={si}
                                            className="glass-card skill-card"
                                            initial="hidden"
                                            animate={isInView && isExpanded ? 'visible' : 'hidden'}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                    transition: { delay: ci * 0.08 + si * 0.04, duration: 0.4 },
                                                },
                                            }}
                                            whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                                            style={{ textAlign: 'left', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className="skill-icon" style={{ background: `${skill.color}20`, color: skill.color, width: '48px', height: '48px', fontSize: '1.2rem' }}>
                                                    {skill.name.slice(0, 2).toUpperCase()}
                                                </div>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    fontFamily: 'var(--font-display)',
                                                    color: skill.color,
                                                    background: `${skill.color}20`,
                                                    padding: '4px 10px',
                                                    borderRadius: '20px',
                                                }}>
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{skill.name}</h4>
                                            <div className="skill-bar" style={{ height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden' }}>
                                                <motion.div
                                                    className="skill-progress"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ delay: ci * 0.08 + si * 0.04 + 0.2, duration: 0.8, ease: 'easeOut' }}
                                                    style={{
                                                        height: '100%',
                                                        background: skill.color,
                                                        borderRadius: '3px',
                                                        transformOrigin: 'left',
                                                    }}
                                                />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                                <span>{skill.years}+ years</span>
                                                <Check size={10} color={skill.color} aria-hidden="true" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}