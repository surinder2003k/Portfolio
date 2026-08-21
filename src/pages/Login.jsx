import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sun, Moon, User, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/useTheme';

// NOTE: client-side only gate. Real auth belongs server-side.
// Credentials: username "sunny" / password "3424"
const USER = 'sunny';
const PASS = '3424';

export default function Login({ onBack }) {
    const { theme, toggleTheme } = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setTimeout(() => {
            if (username === USER && password === PASS) {
                sessionStorage.setItem('portfolio-auth', '1');
                window.history.pushState({}, '', '/admin');
                window.dispatchEvent(new PopStateEvent('popstate'));
            } else {
                setError('Invalid username or password.');
                setLoading(false);
            }
        }, 500);
    };

    return (
        <div className="auth-page">
            <button className="auth-theme" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.div
                className="auth-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <button className="auth-back" onClick={onBack} aria-label="Back to site">
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="auth-icon">
                    <ShieldCheck size={28} />
                </div>
                <h1 className="auth-title">Admin Login</h1>
                <p className="auth-sub">Sign in to edit your portfolio content.</p>

                <form onSubmit={submit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="auth-input-wrap">
                            <User size={16} />
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="sunny"
                                autoComplete="username"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="auth-input-wrap">
                            <Lock size={16} />
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <button type="submit" className="btn-primary auth-submit" disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}