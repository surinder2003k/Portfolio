import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const certificates = [
    { title: 'Swayam Exam', desc: 'Government of India' },
    { title: 'Google Analytics', desc: 'Google Certified' },
    { title: 'Python', desc: 'Programming Certificate' },
    { title: 'Digital Marketing (SEO)', desc: 'Marketing Expertise' },
    { title: 'MERN Stack Development', desc: 'Full Stack Training' },
    { title: 'I CAN Workshop', desc: 'Participation Certificate' },
];

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="certificates" ref={ref}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                >
                    <h2 className="section-title">
                        <span className="gradient-text">Certificates</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Credentials and certifications that validate my expertise.
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
                                    transition: { delay: i * 0.1, duration: 0.4 },
                                },
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="certificate-icon">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4>{cert.title}</h4>
                                <p>{cert.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
