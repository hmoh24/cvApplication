function Education({
  qualification,
  institutionName,
  dateStarted,
  dateEnded,
  bulletPoints,
}) {
  return (
    <section className="education">
      <h2>{qualification}</h2>
      <p>{institutionName}</p>
      <p>{dateStarted}</p>
      <p>{dateEnded}</p>
      {bulletPoints.map((bullet, index) => {
        return <p key={index}>{bullet}</p>;
      })}
    </section>
  );
}

export default Education;
