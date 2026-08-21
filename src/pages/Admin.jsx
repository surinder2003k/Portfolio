import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowLeft, Save, Check, User, Mail, MapPin, Globe, Briefcase, Code2 } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const STORAGE_KEY = 'portfolio-content';

const DEFAULTS = {
    hero: {
        greeting: 'Hey there, I\'m',
        name: 'Surinder Kumar',
        role: 'Full Stack MERN Developer • SEO Specialist • AI Enthusiast',
        description: 'I turn coffee into clean code. Building production-ready web apps with React, Node.js & MongoDB since 2022.',
        stats: [
            { value: '15+', label: 'Projects Shipped' },
            { value: '3+', label: 'Years Coding' },
            { value: '50+', label: 'Happy Clients' },
        ],
    },
    about: {
        text1: 'I\'m Surinder — a self-taught developer who started coding because I wanted to build my own ideas.',
        text2: 'Since then, I\'ve shipped 15+ production applications and helped businesses rank on page 1 of Google.',
        location: 'Mohali (Kharar), Punjab, India',
        email: 'surinder2003k@gmail.com',
        education: 'BCA, Rayat Bahra University (2022–2025)',
        languages: 'English, Punjabi, Hindi',
    },
    contact: {
        email: 'surinder2003k@gmail.com',
        telegram: '@surinder2003k',
        location: 'Mohali, Punjab, India',
        phone: '+91 98765 43210',
        github: 'https://github.com/surinder2003k',
        linkedin: 'https://linkedin.com/in/surinder-web-dev',
        website: 'https://surinder.free.nf',
    },
    social: {
        github: 'https://github.com/surinder2003k',
        linkedin: 'https://linkedin.com/in/surinder-web-dev',
        website: 'https://surinder.free.nf',
        telegram: 'https://t.me/surinder2003k',
    },
};

function loadContent() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
    } catch {
        return DEFAULTS;
    }
}

export default function Admin({ onBack }) {
    const { theme, toggleTheme } = useTheme();
    const [content, setContent] = useState(loadContent);
    const [saved, setSaved] = useState(false);
    const [authed] = useState(sessionStorage.getItem('portfolio-auth') === '1');

    useEffect(() => {
        if (!authed) {
            window.history.pushState({}, '', '/login');
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    }, [authed]);

    if (!authed) return null;

    const set = (section, field, value) =>
        setContent((c) => ({ ...c, [section]: { ...c[section], [field]: value } }));

    const save = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const reset = () => {
        localStorage.removeItem(STORAGE_KEY);
        setContent(DEFAULTS);
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <button className="auth-back" onClick={onBack} aria-label="Back to site">
                    <ArrowLeft size={18} /> View Site
                </button>
                <h1 className="admin-heading">Portfolio Editor</h1>
                <div className="admin-actions">
                    <button className="auth-theme" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button className="admin-reset" onClick={reset}>Reset</button>
                    <button className="btn-primary admin-save" onClick={save}>
                        {saved ? <><Check size={16} /> Saved</> : <><Save size={16} /> Save Changes</>}
                    </button>
                </div>
            </header>

            <div className="admin-body">
                <motion.section className="admin-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2><User size={18} /> Hero Section</h2>
                    <label>Greeting</label>
                    <input value={content.hero.greeting} onChange={(e) => set('hero', 'greeting', e.target.value)} />
                    <label>Full Name</label>
                    <input value={content.hero.name} onChange={(e) => set('hero', 'name', e.target.value)} />
                    <label>Role / Title</label>
                    <input value={content.hero.role} onChange={(e) => set('hero', 'role', e.target.value)} />
                    <label>Hero Description</label>
                    <textarea rows={3} value={content.hero.description} onChange={(e) => set('hero', 'description', e.target.value)} />
                    <label>Stat 1 — value | label</label>
                    <div className="admin-row">
                        <input value={content.hero.stats[0].value} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 0 ? { ...s, value: e.target.value } : s))} />
                        <input value={content.hero.stats[0].label} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 0 ? { ...s, label: e.target.value } : s))} />
                    </div>
                    <label>Stat 2 — value | label</label>
                    <div className="admin-row">
                        <input value={content.hero.stats[1].value} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 1 ? { ...s, value: e.target.value } : s))} />
                        <input value={content.hero.stats[1].label} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 1 ? { ...s, label: e.target.value } : s))} />
                    </div>
                    <label>Stat 3 — value | label</label>
                    <div className="admin-row">
                        <input value={content.hero.stats[2].value} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 2 ? { ...s, value: e.target.value } : s))} />
                        <input value={content.hero.stats[2].label} onChange={(e) => set('hero', 'stats', content.hero.stats.map((s, i) => i === 2 ? { ...s, label: e.target.value } : s))} />
                    </div>
                </motion.section>

                <motion.section className="admin-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2><Code2 size={18} /> About Section</h2>
                    <label>About Paragraph 1</label>
                    <textarea rows={3} value={content.about.text1} onChange={(e) => set('about', 'text1', e.target.value)} />
                    <label>About Paragraph 2</label>
                    <textarea rows={3} value={content.about.text2} onChange={(e) => set('about', 'text2', e.target.value)} />
                    <label>Location</label>
                    <input value={content.about.location} onChange={(e) => set('about', 'location', e.target.value)} />
                    <label>Email</label>
                    <input value={content.about.email} onChange={(e) => set('about', 'email', e.target.value)} />
                    <label>Education</label>
                    <input value={content.about.education} onChange={(e) => set('about', 'education', e.target.value)} />
                    <label>Languages</label>
                    <input value={content.about.languages} onChange={(e) => set('about', 'languages', e.target.value)} />
                </motion.section>

                <motion.section className="admin-section" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2><Mail size={18} /> Contact & Social</h2>
                    <label>Email</label>
                    <input value={content.contact.email} onChange={(e) => set('contact', 'email', e.target.value)} />
                    <label>Telegram</label>
                    <input value={content.contact.telegram} onChange={(e) => set('contact', 'telegram', e.target.value)} />
                    <label>Location</label>
                    <input value={content.contact.location} onChange={(e) => set('contact', 'location', e.target.value)} />
                    <label>Phone</label>
                    <input value={content.contact.phone} onChange={(e) => set('contact', 'phone', e.target.value)} />
                    <label>GitHub URL</label>
                    <input value={content.social.github} onChange={(e) => set('social', 'github', e.target.value)} />
                    <label>LinkedIn URL</label>
                    <input value={content.social.linkedin} onChange={(e) => set('social', 'linkedin', e.target.value)} />
                    <label>Website URL</label>
                    <input value={content.social.website} onChange={(e) => set('social', 'website', e.target.value)} />
                    <label>Telegram URL</label>
                    <input value={content.social.telegram} onChange={(e) => set('social', 'telegram', e.target.value)} />
                </motion.section>
            </div>

            <div className="admin-footnote">
                Changes save to this browser (localStorage). To make them live for everyone, wire this editor to your backend / CMS.
            </div>
        </div>
    );
}