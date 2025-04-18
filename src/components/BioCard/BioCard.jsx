import { useState } from 'react';

function BioCard(props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="biocard">
      <img src={props.image} alt={props.name} className="profilePic" />
      <h2>{props.name}</h2>
      <p className="bio">
        {showMore ? props.bio : `${props.bio.slice(0, 30)}...`}
      </p>
      <button
        className="toggleButton"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default BioCard;
