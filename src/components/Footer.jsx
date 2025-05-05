// import profileImage from '/img/profile.jpg'; 

function Footer() {
  return (
    <footer className="footer">
      {/* Column 1: Profile */}
      <div className="footer__column footer__column--profile">
        {/* <img src={profileImage} alt="Profile" className="footer__avatar" /> */}
        <h2 className="footer__name">Elise Hrabik</h2>
        <p className="footer__title">Front end web developer - UX/UI Designer</p>
      </div>

      {/* Column 2: Navigation */}
      <div className="footer__column footer__column--nav">
        <a href="/" className="footer__link">Home</a>
        <a href="#skills" className="footer__link">Skills</a>
        <a href="#projects" className="footer__link">Projects</a>
        <a href="#feedback" className="footer__link">Contact</a>
      </div>

      {/* Column 3: Social/Contact */}
      <div className="footer__column footer__column--social">
        <a href="#contact" className="footer__social-link">Contact</a>
        <a href="mailto:you@example.com" className="footer__social-link">Email</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="footer__social-link">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="footer__social-link">LinkedIn</a>
        
      </div>
    </footer>
  );
}

export default Footer;
