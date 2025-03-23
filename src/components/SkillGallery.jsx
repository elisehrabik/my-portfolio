import SkillCard from "./SkillCard";

function SkillGallery(props) {
    return (
        <div className="skill-gallery">
            {props.skills.map((skill, index) => (
                <div key={index}>
                    <SkillCard name={skill.name}/>
                </div>
            ))}
        </div>
    )
}

export default SkillGallery;