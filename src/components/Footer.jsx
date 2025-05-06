import profileImage from '../img/profile_picture228.jpg';
import { FaEnvelope, FaGithub, FaLinkedin, FaCommentDots } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1: Profile */}
        <div className="footer__column footer__column--profile">
          <img src={profileImage} alt="Profile" className="footer__avatar" />
          <div className="footer__info">
            <h2 className="footer__name">Elise Hrabik</h2>
            <p className="footer__title">
              Front end web developer - UX/UI Designer
            </p>
          </div>
        </div>

        {/* Grouped nav + social columns */}
        <div className="footer__links-wrapper">
          <div className="footer__column footer__column--nav">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="#skills" className="footer__link">
              Skills
            </a>
            <a href="#projects" className="footer__link">
              Projects
            </a>
            <a href="#feedback" className="footer__link">
              Contact
            </a>
          </div>

          <div className="footer__column footer__column--social">
            <a href="#contact" className="footer__social-link">
              <FaCommentDots className="footer__icon" /> Contact
            </a>
            <a href="mailto:elise.hrabik@gmail.com" className="footer__social-link">
              <FaEnvelope className="footer__icon" /> Email
            </a>
            <a
              href="https://github.com/elisehrabik"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <FaGithub className="footer__icon" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/elise-hrabik"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <FaLinkedin className="footer__icon" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
