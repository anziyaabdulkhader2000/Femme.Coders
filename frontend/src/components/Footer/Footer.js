import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
            <FontAwesomeIcon className="footer__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="footer__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="footer__socialicons" icon={faGithub} />
            </div>

    
            <ul className="footer__list">
                <li>
                    <Link to="/home" className="footer__items"> Internship</Link>
                </li>
                <li>
                    <Link to="/job" className="footer__items">Carrier Development</Link>
                </li>
                <li>
                    <Link to="/company" className="footer__items">Webinar</Link>
                </li>
                <li>
                    <Link to="/events" className="footer__items">Workshops</Link>
                </li>
                <li>
                    <Link to="/learning" className="footer__items">Women In Tech</Link>
                </li>
                <li>
                    <Link to="/learning" className="footer__items">Networking Events</Link>
                </li>
            </ul>
            <p className="footer__copyright">
                copyright &#169; LetHerFly
            </p>
        </footer>
    )
}

export default Footer;