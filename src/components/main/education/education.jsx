function Education({
  qualification,
  institutionName,
  dateStarted,
  dateEnded,
  bulletPoints,
}) {
  return (
    <section className="education mainGrid">
      <section>
        <p>
          {qualification}, {institutionName}
        </p>
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

export default Education;
