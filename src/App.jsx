import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hero from './components/Hero';
import ExpertiseGallery from './components/Expertise/ExpertiseGallery';
import Projects from './components/Project/Projects';
import ProjectDetail from './components/Project/ProjectDetail';
import ThemeProvider from "./components/ThemeProvider";
import portrait from "./img/profile_picture228.jpg";
import './index.css';
import './sass/components/_main.scss';
import './sass/styles.scss';
import FeedbackForm from './components/FeedbackForm';

const expertiseData = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'SASS' },
  { name: 'JavaScript' },
  { name: 'jQuery' },
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'Bootstrap' },
  { name: 'GitHub' },
  { name: 'Wordpress' },
  { name: 'Adobe' },
  { name: 'Figma' },
  { name: 'UX/UI Design' },
  { name: 'Wireframing' },
  { name: 'Databases' },
  { name: 'UML Diagrams' },
];

function App() {
  return (
    <ThemeProvider>

    <Router basename="/my-portfolio">
      <div>

        {/* Navbar */}
        <nav className="navbar">
          <a href="/" className="navbar__link">
            Home
          </a>
          <a href="#skills" className="navbar__link">
            Skills
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#feedback" className="navbar__link">
            Contact
          </a>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>

                {/* Hero */}
                <section id="hero">
                  <Hero/>
                </section>

                <section id="expertise">
                  <ExpertiseGallery/>
                </section>

                {/* <section id="skills">
                  <SkillGallery skills={skillData} />
                </section> */}

                {/* <section id="projects">
                  <Projects />
                </section>

                <section id="feedback">
                  <FeedbackForm />
                </section> */}
              </React.Fragment>
            }
          />

            {/* Project Pages */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}
export default App;
