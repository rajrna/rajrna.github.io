function ExperienceItem({ experience }) {
  return (
    <>
      <div>
        <span>{experience.role}</span>
        <span>
          {experience.company} - {experience.location}
        </span>
      </div>
      <div>
        <span>{experience.duration}</span>
      </div>
      <ul>
        {experience.highlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
    </>
  );
}

export default ExperienceItem;
