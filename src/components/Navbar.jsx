import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
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

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container">
                <Link
                    to="hero"
                    smooth
                    duration={500}
                    className="nav-logo"
                    style={{ cursor: 'pointer' }}
                    aria-label="Go to top"
                >
                    S<span>K</span>
                </Link>

                <div className={`nav-links ${mobileOpen ? 'open' : ''}`} role="menubar">
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
                            onClick={closeMobile}
                            role="menuitem"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="https://surinder.free.nf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary nav-cta"
                        aria-label="View Resume (opens in new tab)"
                    >
                        Resume
                    </a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>
        </motion.nav>
    );
}