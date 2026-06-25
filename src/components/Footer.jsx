import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

const footerLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-logo" aria-label="Surinder Kumar logo">
                    S<span>K</span>
                </div>

                <nav className="footer-links" aria-label="Footer navigation">
                    {footerLinks.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth
                            duration={500}
                            offset={-80}
                            className="footer-link"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <p className="footer-copy">
                    &copy; {year} Surinder Kumar. Made with{' '}
                    <Heart size={14} style={{ display: 'inline', color: '#ff6b9d', verticalAlign: 'middle' }} aria-hidden="true" />{' '}
                    using React.js
                </p>
            </div>
        </footer>
    );
}