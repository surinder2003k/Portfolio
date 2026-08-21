import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Login from './pages/Login';
import Admin from './pages/Admin';

// crude hash router
function useRoute() {
    const [route, setRoute] = useState(window.location.pathname);
    useEffect(() => {
        const onPop = () => setRoute(window.location.pathname);
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);
    return route;
}

export default function App() {
    const [loading, setLoading] = useState(true);
    const route = useRoute();

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => { document.documentElement.style.scrollBehavior = ''; };
    }, []);

    // route-based pages
    if (route === '/login') {
        return (
            <ThemeProvider>
                <Login onBack={() => window.history.pushState({}, '', '/')} />
            </ThemeProvider>
        );
    }
    if (route.startsWith('/admin')) {
        return (
            <ThemeProvider>
                <Admin onBack={() => window.history.pushState({}, '', '/')} />
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider>
            <AnimatePresence mode="wait">
                {loading ? (
                    <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
                ) : (
                    <div key="content">
                        <Navbar />
                        <main>
                            <Hero />
                            <About />
                            <Experience />
                            <Skills />
                            <Projects />
                            <Certificates />

                            <section className="signature-band container" aria-label="Work together callout">
                                <div className="signature-card coral">
                                    <h2>Let's build something that ships.</h2>
                                    <p>I turn ideas into production-ready web apps with React, Node.js and MongoDB. Available for freelance and full-time work — worldwide.</p>
                                    <Link to="contact" smooth duration={500} offset={-80}>
                                        <button className="btn-outline">Start a project</button>
                                    </Link>
                                </div>
                            </section>
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
}