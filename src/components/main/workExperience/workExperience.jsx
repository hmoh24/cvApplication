function WorkExperience({
  role,
  company,
  dateStarted,
  dateEnded,
  bulletPoints,
}) {
  return (
    <section className="workExperience mainGrid">
      <section>
        <h3>{`${role}, ${company}`}</h3>
        <p>
          {dateStarted} - {dateEnded}
        </p>
      </section>
      <ul>
        {bulletPoints.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
    </section>
  );
}

export default WorkExperience;
