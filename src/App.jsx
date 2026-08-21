import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
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
                        <ParticlesBg />
                        <Navbar />
                        <main>
                            <Hero />
                            <About />
                            <Experience />
                            <Skills />
                            <Projects />
                            <Certificates />
                            <Testimonials />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
}