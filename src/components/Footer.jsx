import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

const footerLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    S<span>K</span>
                </div>

                <div className="footer-links">
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
                </div>

                <p className="footer-copy">
                    © 2025 Surinder Kumar. Made with{' '}
                    <Heart size={14} style={{ display: 'inline', color: '#ff6b9d', verticalAlign: 'middle' }} />{' '}
                    using React.js
                </p>
            </div>
        </footer>
    );
}
