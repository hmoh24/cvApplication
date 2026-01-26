import Personal from "./personal/personal";
import WorkExperience from "./workExperience/workExperience";
import Education from "./education/education";

function Main({ personalDetails, workExperience, education }) {
  return (
    <main>
      <Personal
        name={personalDetails.name}
        email={personalDetails.email}
        phone={personalDetails.phone}
        location={personalDetails.location}
      />
      <section className="cvSection">
        <h2 className="mainHeader">Work Experience</h2>
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
      </section>
      <section className="cvSection">
        <h2 className="mainHeader">Education</h2>
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
      </section>
    </main>
  );
}

export default Main;
