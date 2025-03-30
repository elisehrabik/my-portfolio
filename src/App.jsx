import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BioCard from "./components/BioCard/BioCard";
import SkillGallery from "./components/SkillGallery";
import ProjectDetail from "./components/Project/ProjectDetail";
import Projects from "./components/Project/Projects";

import "./index.css";
import "./sass/components/_main.scss";
import "./sass/styles.scss";

const skillData = [
  {name: "HTML"},
  {name: "CSS"}, 
  {name: "SASS"}, 
  {name: "JavaScript"}, 
  {name: "jQuery"}, 
  {name: "PHP"}, 
  {name: "Laravel"}, 
  {name: "Java"}, 
  {name: "Python"},
  {name: "Bootstrap"},
  {name: "GitHub"},
  {name: "Wordpress"},
  {name: "Adobe"},
  {name: "Figma"}, 
  {name: "UX/UI Design"},
  {name: "Wireframing"},
  {name: "Databases"},
  {name: "UML Diagrams"}
]

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <Link to="/" className="navbar__link navbar__link--home">
            Home
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
            <BioCard
              image="src\img\profile_picture228.jpg"
              name="Elise Hrabik"
              bio="I'm a web technologies student with a strong foundation in HTML, CSS, PHP, JavaScript, Java, and UX/UI principles. I love crafting responsive and user-friendly websites that enhance the digital experience. I'm currently diving deeper into front-end development, accessibility, and design best practices. My goal is to contribute meaningful projects that showcase both my technical and creative skill."/>
            <SkillGallery skills={skillData}/> 
            <Projects />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>

    // <div className="main">
    // <BioCard
    //   image="src\img\profile_picture228.jpg"
    //   name="Elise Hrabik"
    //   bio="I'm a web technologies student with a strong foundation in HTML, CSS, PHP, JavaScript, Java, and UX/UI principles. I love crafting responsive and user-friendly websites that enhance the digital experience. I'm currently diving deeper into front-end development, accessibility, and design best practices. My goal is to contribute meaningful projects that showcase both my technical and creative skill."
    // />
    // <SkillGallery skills={skillData} />
    // </div>
  )
}

export default App
