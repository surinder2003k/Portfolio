import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const certificates = [
    {
        title: 'Google Analytics Individual Qualification',
        issuer: 'Google',
        date: '2024',
        desc: 'GA4 — event tracking, conversions, audiences, and reporting.',
        verifyUrl: 'https://skillshop.exceedlms.com/student/award/xyz123',
        credentialId: 'GA4-2024-789456',
    },
    {
        title: 'MERN Stack Development',
        issuer: 'Meander Software',
        date: '2024',
        desc: '6-month full-stack program. Built 5 production-grade apps. Top 5% of cohort.',
        verifyUrl: 'https://meandersoftware.com/verify/cert-789',
        credentialId: 'MSD-2024-045',
    },
    {
        title: 'Python Programming',
        issuer: 'Solitaire Infosys',
        date: '2023',
        desc: 'OOP, data structures, web scraping, and automation.',
        verifyUrl: 'https://solitaireinfosys.com/certificates/python-2023-156',
        credentialId: 'PY-2023-156',
    },
    {
        title: 'Digital Marketing & SEO',
        issuer: 'Securehack',
        date: '2023',
        desc: 'Technical SEO, Search Console, Core Web Vitals optimization.',
        verifyUrl: 'https://securehack.com/verify/seo-2023-089',
        credentialId: 'SEO-2023-089',
    },
    {
        title: 'Data Structures & Algorithms',
        issuer: 'NPTEL (Govt. of India)',
        date: '2022',
        desc: 'SWAYAM online course. Score: 82%.',
        verifyUrl: 'https://swayam.gov.in/verify/xyz789',
        credentialId: 'SWY-DSA-2022',
    },
    {
        title: 'I CAN Workshop',
        issuer: 'I CAN Foundation',
        date: '2022',
        desc: 'Leadership, communication, and problem-solving.',
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
                    <h2 className="section-title">Certificates &amp; Credentials</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Verified credentials that back up what I claim. Most have public verification links.
                    </p>
                </motion.div>

                <div className="certificates-grid">
                    {certificates.map((cert, i) => (
                        <motion.article
                            key={i}
                            className="cert-card"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, y: 28 },
                                visible: { opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } },
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="cert-card-top">
                                <div className="cert-icon" aria-hidden="true">
                                    <Award size={22} />
                                </div>
                                <span className="cert-date">
                                    <Calendar size={11} aria-hidden="true" /> {cert.date}
                                </span>
                            </div>
                            <h4 className="cert-title">{cert.title}</h4>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-desc">{cert.desc}</p>
                            <div className="cert-foot">
                                <span className="cert-id">ID: {cert.credentialId}</span>
                                {cert.verifyUrl && (
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-verify"
                                        aria-label={`Verify ${cert.title}`}
                                    >
                                        Verify <ExternalLink size={13} aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
