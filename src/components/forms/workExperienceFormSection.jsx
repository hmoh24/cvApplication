import { useState } from "react";
import toggleElementVisibility from "../../util/toggleElementVisibility";

function WorkExperienceFormSection({ workExperience, setWorkExperience }) {
  const [draft, setDraft] = useState(workExperience);

  function handleSubmit(e) {
    e.preventDefault();
    setWorkExperience(draft);
    toggleElementVisibility("workExperienceForm");
  }

  function handleItemChange(e, index) {
    const { name, value } = e.target;
    setDraft((prev) => {
      const items = prev.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [name]: value } : item,
      );
      return { ...prev, items };
    });
  }

  function handleBulletChange(e, jobIndex, bulletIndex) {
    const { value } = e.target;
    setDraft((prev) => {
      const items = prev.items.map((item, itemIndex) => {
        if (itemIndex !== jobIndex) {
          return item;
        }
        const bulletPoints = [...item.bulletPoints];
        bulletPoints[bulletIndex] = value;
        return { ...item, bulletPoints };
      });
      return { ...prev, items };
    });
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
        {draft.items.map((job, index) => {
          return (
            <section className="workExpSubsection" id={job.id} key={job.id}>
              <span className="basicInputWrapper">
                <label htmlFor={`role${job.id}`}>Job Title</label>
                <input
                  type="text"
                  name="role"
                  id={`role${job.id}`}
                  value={job.role}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`company${job.id}`}>Company</label>
                <input
                  type="text"
                  name="companyName"
                  id={`company${job.id}`}
                  value={job.companyName}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`dateStart${job.id}`}>Date Start</label>
                <input
                  type="date"
                  name="dateStarted"
                  id={`dateStart${job.id}`}
                  value={job.dateStarted}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor={`dateEnd${job.id}`}>Date End</label>
                <input
                  type="date"
                  name="dateEnded"
                  id={`dateEnd${job.id}`}
                  value={job.dateEnded}
                  onChange={(e) => handleItemChange(e, index)}
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
                        name="bulletPoints"
                        value={bullet}
                        onChange={(e) =>
                          handleBulletChange(e, index, position)
                        }
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
