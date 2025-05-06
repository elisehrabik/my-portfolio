import { useEffect, useRef } from 'react';

function ExpertiseCard({ name, description, index }) {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="expertise-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="expertise-card__title">{name}</h3>
      <p className="expertise-card__description">{description}</p>
    </div>
  );
}

export default ExpertiseCard;
