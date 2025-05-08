import profileImage from '../img/profile_picture228.jpg';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCommentDots,
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

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
            <HashLink className="footer__link" smooth to="/">
              Home
            </HashLink>
            <HashLink className="footer__link" smooth to="/#expertise">
              Skills
            </HashLink>
            <HashLink className="footer__link" smooth to="/#projects">
              Projects
            </HashLink>
            <HashLink className="footer__link" smooth to="/#feedback">
              Contact
            </HashLink>
          </div>

          <div className="footer__column footer__column--social">
            <HashLink className="footer__link" smooth to="/#feedback">
              <FaCommentDots className="footer__icon" /> Contact
            </HashLink>

            <a
              href="mailto:elise.hrabik@gmail.com"
              className="footer__social-link"
            >
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
