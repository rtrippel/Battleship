import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__section footer__section--about-project">
                <Link to="/about-project" className="footer__link">
                    <h3>About the Project</h3>
                </Link>
            </div>
            <div className="footer__section footer__section--about-developer">
                <Link to="/about-developer" className="footer__link">
                    <h3>About the Developer</h3>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
