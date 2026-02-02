import { useState } from "react";
import toggleElementVisibility from "../../util/toggleElementVisibility";

function EducationFormSection({ education, setEducation }) {
  const [draft, setDraft] = useState(education);

  function handleAddEducation(){
    setDraft((prev)=>{
      const newEducation = {
        id: `edu-${prev.items.length + 1}`,
        qualification: '',
        institutionName: '',
        dateStarted: "2017-09-01",
        dateEnded: "2020-06-01",
        bulletPoints: ['', '']
      }

      return {
        items: [...prev.items, newEducation]
      }
    })
  }

  function handleDeleteEducation(educationIndex){
    setDraft((prev) => {
      const filteredCopy = prev.items.filter((education, index) => {return educationIndex !== index})
      console.log(filteredCopy)
      const mapped = filteredCopy.map((education, index) => {
        return {
          ...education,
          id: `edu-${index}`
        }
      })
      return {
        items: mapped
      }
    })
  }

   function handleAddBullet(jobIndex) {
    setDraft((prev) => {
      const items = [...prev.items];
      const job = { ...items[jobIndex] };
      job.bulletPoints = [...job.bulletPoints, ""];
      items[jobIndex] = job;
      return {
        items,
      };
    });
  }

  function handleDeleteBullet(jobIndex, bulletIndex) {
    // e.preventDefault();
    setDraft((prev) => {
      return {
        ...prev,
        items: prev.items.map((job, index) => {
          return jobIndex === index
            ? {
                ...job,
                bulletPoints: job.bulletPoints.filter((bullet, position) => {
                  return bulletIndex !== position;
                }),
              }
            : job;
        }),
      };
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    setEducation(draft);
    toggleElementVisibility("educationForm");
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

  function handleBulletChange(e, itemIndex, bulletIndex) {
    const { value } = e.target;
    setDraft((prev) => {
      const items = prev.items.map((item, index) => {
        if (index !== itemIndex) {
          return item;
        }
        const bulletPoints = [...item.bulletPoints];
        bulletPoints[bulletIndex] = value;
        return { ...item, bulletPoints };
      });
      return { ...prev, items };
    });
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
        {draft.items.map((listItem, index) => {
          return (
            <section
              id={listItem.id}
              key={listItem.id}
              className="educationSubsection"
            >
              <h4>Education {index + 1}</h4>
              <button
                  onClick={(e) => handleDeleteEducation(index)}
                  className="removeEducation"
                >
                  X
                </button>
              <span className="basicInputWrapper">
                <label htmlFor={`qualification${listItem.id}`}>
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  id={`qualification${listItem.id}`}
                  value={listItem.qualification}
                  onChange={(e) => handleItemChange(e, index)}
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
                  value={listItem.institutionName}
                  onChange={(e) => handleItemChange(e, index)}
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
                  value={listItem.dateStarted}
                  onChange={(e) => handleItemChange(e, index)}
                />
              </span>
              <span className="basicInputWrapper">
                <label htmlFor="">Date Ended</label>
                <input
                  type="date"
                  name="dateEnded"
                  id={`dateEnded${listItem.id}`}
                  value={listItem.dateEnded}
                  onChange={(e) => handleItemChange(e, index)}
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
                        name="bulletPoints"
                        value={bullet}
                        onChange={(e) =>
                          handleBulletChange(e, index, position)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteBullet(index, position)}
                        className="deleteBullet"
                      >
                        X
                      </button>
                    </span>
                  );
                })}
                <button
                  type="button"
                  onClick={() => handleAddBullet(index)}
                  className="addBullet"
                >
                  Add Bullet Point
                </button>
              </section>
            </section>
          );
        })}
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
        <button type="submit">Submit Changes</button>
      </form>
    </section>
  );
}

export default EducationFormSection;
