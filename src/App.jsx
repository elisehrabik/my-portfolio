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
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <ThemeProvider>

    <Router basename="/my-portfolio">
      <div>

        {/* Navbar */}
        <NavBar />

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
                </section>*/}

                <section id="projects">
                  <Projects />
                </section> 

                <section id="feedback">
                  <FeedbackForm />
                </section>
              </React.Fragment>
            }
          />

            {/* Project Pages */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          
        </Routes>
        
      </div>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}
export default App;
