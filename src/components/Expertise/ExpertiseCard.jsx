function ExpertiseCard({ name, description }) {
    return (
      <div className="expertise-card">
        <h3 className="expertise-card__title">{name}</h3>
        <p className="expertise-card__description">{description}</p>
      </div>
    );
  }
  
  export default ExpertiseCard; 
  