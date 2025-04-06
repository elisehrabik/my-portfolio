import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BioCard from './components/BioCard/BioCard';
import SkillGallery from './components/SkillGallery';
// import ProjectDetail from './components/Project/ProjectDetail';
// import ProjectList from './components/Project/projects';
import Projects from './components/Project/Projects';
import ProjectDetail from './components/Project/ProjectDetail';

import './index.css';
import './sass/components/_main.scss';
import './sass/styles.scss';
import FeedbackForm from './components/FeedbackForm';

const skillData = [
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
    <Router>
      <div>
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
                <section id="bio">
                  <BioCard
                    image="src/img/profile_picture228.jpg"
                    name="Elise Hrabik"
                    bio="I'm a web technologies student..."
                  />
                </section>

                <section id="skills">
                  <SkillGallery skills={skillData} />
                </section>

                <section id="projects">
                  <Projects />
                </section>

                <section id="feedback">
                  <FeedbackForm />
                </section>
              </React.Fragment>
            }
          />

          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
