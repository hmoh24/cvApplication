import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/main";
import PersonalFormSection from "./components/forms/personalFormSection";
import data from "./components/cvData";
import WorkExperienceFormSection from "./components/forms/workExperienceFormSection";

function App() {
  const [personalDetails, setPersonalDetails] = useState(data.personalDetails);
  const [workExperience, setWorkExperience] = useState(data.workExperience);
  const [education, setEducation] = useState(data.education);
  console.log(workExperience);
  return (
    // can generalise form sections to create inputs according to object shape
    <>
      <section className="sideBar">
        <h1>CV Application</h1>
        <PersonalFormSection
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <WorkExperienceFormSection
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      </section>
      <Main
        personalDetails={personalDetails}
        workExperience={workExperience}
        education={education}
      />
    </>
  );
}

export default App;
