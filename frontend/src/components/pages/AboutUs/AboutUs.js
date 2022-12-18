import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import aboutus from "./aboutus.jpg"

import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <section className="about">
        <h2 className="about__title">About LetHerFly</h2>

        <div className="about__details">

        <div className="about__left">
        <h3 className="about__mainlefttitle">Find Your Spark</h3>
                <p className="about__paragraph"> A Platform for women to accelerate thier professional development and success in their career</p>
                <button className="about__btn">Contact Us</button>
                <div className="about__social">
            <FontAwesomeIcon className="about__socialicons" icon={faInstagram} />
            <FontAwesomeIcon className="about__socialicons" icon={faLinkedin} />
            <FontAwesomeIcon className="about__socialicons" icon={faTwitter} />
            </div>
            </div>
            
            <div className="about__right">
                <img src={aboutus} alt="" className="about__image" />
            </div>
        </div>
            
        </section>
    )
}

export default AboutUs;