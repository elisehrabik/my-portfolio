import ExpertiseCard from './ExpertiseCard';
import expertiseList from './ExpertiseData';

function ExpertiseGallery() {
  return (
    <div className="wrapper expertise-gallery">
      <h2 className="expertise-gallery__title">My Expertise</h2>
      <div className="expertise-gallery__cards">
        {expertiseList.map((expertise) => (
          <ExpertiseCard
            key={expertise.id}
            name={expertise.title}
            description={expertise.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpertiseGallery;
