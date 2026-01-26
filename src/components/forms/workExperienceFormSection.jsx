import toggleElementVisibility from "../../util/toggleElementVisibility";

function WorkExperienceFormSection({ workExperience, setWorkExperience }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newWorkExperienceState = { items: [] };
    const workExperienceSections = [
      ...document.getElementsByClassName("workExpSubsection"),
    ];
    workExperienceSections.forEach((job, index) => {
      const role = document.getElementById(`role${job.id}`).value;
      const company = document.getElementById(`company${job.id}`).value;
      const dateStart = document.getElementById(`dateStart${job.id}`).value;
      const dateEnd = document.getElementById(`dateEnd${job.id}`).value;
      const bulletWrapperSection = job.getElementsByClassName(
        "bulletPointsWrapper",
      )[0];
      console.log(bulletWrapperSection);
      const bulletPointInputs = [
        ...bulletWrapperSection.getElementsByTagName("input"),
      ];
      console.log(bulletPointInputs);
      const bulletArray = bulletPointInputs.map((input) => input.value);

      newWorkExperienceState.items.push({
        id: job.id,
        role: role,
        companyName: company,
        dateStarted: dateStart,
        dateEnded: dateEnd,
        bulletPoints: bulletArray,
      });
    });
    console.log(newWorkExperienceState);
    setWorkExperience(newWorkExperienceState);
    toggleElementVisibility("workExperienceForm");
  }

  //probably should do display none to display flex instead of visibility
  return (
    <section className="formButtonContainer">
      <button
        id="Personal Details"
        onClick={() => {
          toggleElementVisibility("workExperienceForm");
        }}
      >
        Edit Work Experience
      </button>
      <form
        action=""
        className="workExperienceForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>WorkExperience</h3>
        {workExperience.items.map((job, index) => {
          return (
            <section className="workExpSubsection" id={job.id} key={job.id}>
              <span className="basicInputWrapper">
                <label htmlFor={`role${job.id}`}>Job Title</label>
                <input
                  type="text"
                  name="role"
                  id={`role${job.id}`}
                  placeholder={job.role}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`company${job.id}`}>Company</label>
                <input
                  type="text"
                  name="company"
                  id={`company${job.id}`}
                  placeholder={job.company}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`dateStart${job.id}`}>Date Start</label>
                <input
                  type="date"
                  name="date start"
                  id={`dateStart${job.id}`}
                  placeholder={job.dateStarted}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`dateEnd${job.id}`}>Date End</label>
                <input
                  type="date"
                  name="date end"
                  id={`dateEnd${job.id}`}
                  placeholder={job.dateEnded}
                />
              </span>
              <section className="bulletPointsWrapper">
                <h4>Job Information</h4>
                {job.bulletPoints.map((bullet, position) => {
                  return (
                    <span className="basicInputWrapper" key={position}>
                      <label htmlFor={`bulllet${job.id}${position}`}>
                        {position}
                      </label>
                      <input
                        type="text"
                        id={`bulllet${job.id}${position}`}
                        name="bullet point"
                        placeholder={bullet}
                      />
                    </span>
                  );
                })}
              </section>
            </section>
          );
        })}

        <button type="submit">Submit Changes</button>
      </form>
    </section>
  );
}

export default WorkExperienceFormSection;
