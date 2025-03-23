import "./index.css";
import "./sass/styles.scss";
import BioCard from "./components/BioCard/BioCard";
import SkillGallery from "./components/SkillGallery";
import "./sass/components/_main.scss";

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
    <div className="main">
    <BioCard
      image="src\img\profile_picture228.jpg"
      name="Elise Hrabik"
      bio="I'm a web technologies student with a strong foundation in HTML, CSS, PHP, JavaScript, Java, and UX/UI principles. I love crafting responsive and user-friendly websites that enhance the digital experience. I'm currently diving deeper into front-end development, accessibility, and design best practices. My goal is to contribute meaningful projects that showcase both my technical and creative skill."
    />
    <SkillGallery skills={skillData} />
    </div>
  )
}

export default App
