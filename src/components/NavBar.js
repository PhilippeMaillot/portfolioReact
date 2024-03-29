import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/photovillers.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/portfolioReact">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
              <Nav.Link href="#veilles" className={activeLink === 'veilles' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('veilles')}>Veilles</Nav.Link>
              <Nav.Link href="#SIO" className={activeLink === 'SIO' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('SIO')}>BTS</Nav.Link>
              <Nav.Link href="#competences" className={activeLink === 'competences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competences')}>Compétences</Nav.Link>
              <Nav.Link href="#entreprise" className={activeLink === 'competences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('entreprise')}>Entreprise</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/philippe-maillot-38a646254/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/PhilippeMaillot" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="mailto:maillotphilippe78@gmail.com"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
