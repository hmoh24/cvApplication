import Personal from "./personal";
import WorkExperience from "./workExperience";
import Education from "./education";

function Main({ personalDetails, workExperience, education }) {
  return (
    <main>
      <Personal
        name={personalDetails.name}
        email={personalDetails.email}
        phone={personalDetails.phone}
        location={personalDetails.location}
      />
      {workExperience.items.map((job) => {
        return (
          <WorkExperience
            key={job.id}
            role={job.role}
            company={job.companyName}
            dateStarted={job.dateStarted}
            dateEnded={job.dateEnded}
            bulletPoints={job.bulletPoints}
          />
        );
      })}
      {education.items.map((school) => {
        return (
          <Education
            key={school.id}
            qualification={school.qualification}
            institutionName={school.institutionName}
            dateStarted={school.dateStarted}
            dateEnded={school.dateEnded}
            bulletPoints={school.bulletPoints}
          />
        );
      })}
    </main>
  );
}

export default Main;
