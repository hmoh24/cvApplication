function WorkExperience({
  role,
  company,
  dateStarted,
  dateEnded,
  bulletPoints,
}) {
  return (
    <section className="workExperience">
      <h2>{role}</h2>
      <p>{company}</p>
      <p>{dateStarted}</p>
      <p>{dateEnded}</p>
      {bulletPoints.map((bullet, index) => {
        return <p key={index}>{bullet}</p>;
      })}
    </section>
  );
}

export default WorkExperience;
