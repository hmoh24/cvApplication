import toggleElementVisibility from "../../util/toggleElementVisibility";

function EducationFormSection({ education, setEducation }) {
  function handleSubmit(e) {
    e.preventDefault();
    const newEducationState = { items: [] };
    const educationSections = [
      ...document.getElementsByClassName("educationSubsection"),
    ];
    educationSections.forEach((schooling, index) => {
      console.log(schooling);
      const { id } = schooling;
      const qualification = document.getElementById(`qualification${id}`).value;
      const institutionName = document.getElementById(
        `institutionName${id}`,
      ).value;
      const dateStarted = document.getElementById(`dateStarted${id}`).value;
      const dateEnded = document.getElementById(`dateEnded${id}`).value;
      const bulletPoints =
        schooling.getElementsByClassName(`bulletPointsWrapper`)[0];
      const bulletPointInputs = [...bulletPoints.getElementsByTagName("input")];
      const bulletArray = bulletPointInputs.map((input) => input.value);
      newEducationState.items.push({
        id: id,
        qualification: qualification,
        institutionName: institutionName,
        dateStarted: dateStarted,
        dateEnded: dateEnded,
        bulletPoints: bulletArray,
      });
    });
    console.log(newEducationState);
    setEducation(newEducationState);
    toggleElementVisibility("educationForm");
  }
  return (
    <section className="formButtonContainer">
      <button
        id="Education Details"
        onClick={() => {
          toggleElementVisibility("educationForm");
        }}
      >
        Edit Educational Details
      </button>
      <form
        action=""
        className="educationForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Education</h3>
        {education.items.map((listItem, index) => {
          return (
            <section
              id={listItem.id}
              key={listItem.id}
              className="educationSubsection"
            >
              <span className="basicInputWrapper">
                <label htmlFor={`qualification${listItem.id}`}>
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  id={`qualification${listItem.id}`}
                  placeholder={listItem.qualification}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`institutionName${listItem.id}`}>
                  Institution Name
                </label>
                <input
                  type="text"
                  name="institutionName"
                  id={`institutionName${listItem.id}`}
                  placeholder={listItem.institutionName}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`dateStarted${listItem.id}`}>
                  Date Started
                </label>
                <input
                  type="date"
                  name="dateStarted"
                  id={`dateStarted${listItem.id}`}
                  placeholder={listItem.dateStarted}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor="">Date Ended</label>
                <input
                  type="date"
                  name="dateEnded"
                  id={`dateEnded${listItem.id}`}
                  placeholder={listItem.dateEnded}
                />
              </span>
              <section className="bulletPointsWrapper">
                <h4>Education Info</h4>
                {listItem.bulletPoints.map((bullet, position) => {
                  return (
                    <span className="basicInputWrapper" key={position}>
                      <label htmlFor={`bulllet${listItem.id}${position}`}>
                        {position}
                      </label>
                      <input
                        type="text"
                        id={`bulllet${listItem.id}${position}`}
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

export default EducationFormSection;
