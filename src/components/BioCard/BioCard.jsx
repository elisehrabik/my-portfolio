import { useState } from "react";

function BioCard(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="biocard">
      <img src={props.image} alt={props.name} className="profilePic" />
      <h2>{props.name}</h2>
      <p class="bio">{showMore ? props.bio : `${props.bio.slice(0, 30)}...`}</p>
      <button class="toggleButton" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
      <h3>Skills:</h3>
      <ul class="skills">
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default BioCard;
