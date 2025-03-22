import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./sass/styles.scss";
import BioCard from "./components/BioCard/BioCard";
import "./sass/components/_main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main">
    <BioCard
      image="src\img\profile_picture228.jpg"
      name="Elise Hrabik"
      bio="I'm a web technologies student with a strong foundation in HTML, CSS, PHP, JavaScript, Java, and UX/UI principles. I love crafting responsive and user-friendly websites that enhance the digital experience. I'm currently diving deeper into front-end development, accessibility, and design best practices. My goal is to contribute meaningful projects that showcase both my technical and creative skill."
      skills={["HTML/CSS", "Java", "PHP", "JavaScript"]}
    />
    </div>
  </StrictMode>
);
