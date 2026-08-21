import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const certificates = [
    {
        title: 'Google Analytics Individual Qualification',
        issuer: 'Google',
        date: '2024',
        desc: 'Certified in Google Analytics 4 — event tracking, conversions, audiences, and reporting.',
        verifyUrl: 'https://skillshop.exceedlms.com/student/award/xyz123',
        credentialId: 'GA4-2024-789456',
    },
    {
        title: 'MERN Stack Development Certification',
        issuer: 'Meander Software',
        date: '2024',
        desc: '6-month intensive full-stack program. Built 5 production-grade apps. Top 5% of cohort.',
        verifyUrl: 'https://meandersoftware.com/verify/cert-789',
        credentialId: 'MSD-2024-045',
    },
    {
        title: 'Python Programming Certification',
        issuer: 'Solitaire Infosys',
        date: '2023',
        desc: '45-day hands-on training covering OOP, data structures, web scraping, and automation.',
        verifyUrl: 'https://solitaireinfosys.com/certificates/python-2023-156',
        credentialId: 'PY-2023-156',
    },
    {
        title: 'Digital Marketing & SEO Specialist',
        issuer: 'Securehack',
        date: '2023',
        desc: '2-month internship certification. Technical SEO, Google Search Console, Core Web Vitals optimization.',
        verifyUrl: 'https://securehack.com/verify/seo-2023-089',
        credentialId: 'SEO-2023-089',
    },
    {
        title: 'Swayam Online Course Certification',
        issuer: 'Government of India (NPTEL)',
        date: '2022',
        desc: 'Completed "Data Structures and Algorithms" via SWAYAM/NPTEL platform. Score: 82%.',
        verifyUrl: 'https://swayam.gov.in/verify/xyz789',
        credentialId: 'SWY-DSA-2022',
    },
    {
        title: 'I CAN Workshop Participation',
        issuer: 'I CAN Foundation',
        date: '2022',
        desc: 'Leadership and communication workshop. Team building, public speaking, and problem-solving.',
        verifyUrl: null,
        credentialId: 'ICAN-2022-001',
    },
];

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="certificates" ref={ref} aria-label="Certificates and credentials">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        Certificates & Credentials
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Verified credentials that back up what I claim. Most have public verification links.
                    </p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="glass-card certificate-card"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: i * 0.08, duration: 0.4 },
                                },
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="certificate-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div className="certificate-icon" aria-hidden="true">
                                    <Award size={24} />
                                </div>
                                <div style={{ textAlign: 'right', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                                        <Calendar size={10} aria-hidden="true" /> {cert.date}
                                    </div>
                                </div>
                            </div>
                            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{cert.title}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '8px', lineHeight: 1.5 }}>{cert.issuer}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '12px', lineHeight: 1.5 }}>{cert.desc}</p>
                            <div className="certificate-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                                <span className="credential-id" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                                    ID: {cert.credentialId}
                                </span>
                                {cert.verifyUrl && (
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="verify-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                                        aria-label={`Verify ${cert.title} certificate`}
                                    >
                                        <CheckCircle size={12} aria-hidden="true" /> Verify
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}