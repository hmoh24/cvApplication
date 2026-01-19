import toggleElementVisibility from "../../util/toggleElementVisibility";

function WorkExperienceFormSection({ workExperience, setWorkExperience }) {
  function handleSubmit(e) {
    e.preventDefault();
    //can generalise function to go through all input values and create object from the input values to repeat for other forms
    // const name = document.getElementById("nameInput").value;
    // const email = document.getElementById("emailInput").value;
    // const phone = document.getElementById("phoneInput").value;
    // const location = document.getElementById("locationInput").value;
    // setPersonalDetails((prevState) => ({
    //   ...prevState,
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   location: location,
    // }));
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
            <section className="workExpSubsection" key={job.id}>
              <span>
                <label htmlFor={`role${index}`}>Job Title</label>
                <input
                  type="text"
                  name="role"
                  id={`role${index}`}
                  placeholder={job.role}
                />
              </span>
              <span>
                <label htmlFor={`company${index}`}>Company</label>
                <input
                  type="text"
                  name="role"
                  id={`company${index}`}
                  placeholder={job.company}
                />
              </span>
              <span>
                <label htmlFor={`dateStart${index}`}>Date Start</label>
                <input
                  type="text"
                  name="role"
                  id={`dateStart${index}`}
                  placeholder={job.dateStarted}
                />
              </span>
              <span>
                <label htmlFor={`dateEnd${index}`}>Date End</label>
                <input
                  type="text"
                  name="role"
                  id={`dateEnd${index}`}
                  placeholder={job.dateEnded}
                />
              </span>
            </section>
          );
        })}

        <button type="submit">Submit Changes</button>
      </form>
    </section>
  );
}

export default WorkExperienceFormSection;
