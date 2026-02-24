import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container">
                <Link to="hero" smooth duration={500} className="nav-logo" style={{ cursor: 'pointer' }}>
                    S<span>K</span>
                </Link>

                <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth
                            duration={500}
                            offset={-80}
                            spy
                            activeClass="active"
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="https://surinder.free.nf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary nav-cta"
                    >
                        Resume
                    </a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.nav>
    );
}
