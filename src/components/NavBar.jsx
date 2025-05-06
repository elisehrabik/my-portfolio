import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <nav className="navbar">
      <HashLink className="navbar__link" smooth to="/">Home</HashLink>
      <HashLink className="navbar__link" smooth to="/#expertise">Skills</HashLink>
      <HashLink className="navbar__link" smooth to="/#projects">Projects</HashLink>
      <HashLink className="navbar__link" smooth to="/#feedback">Contact</HashLink>
    </nav>
  );
}

export default NavBar;
