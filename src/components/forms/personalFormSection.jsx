import { useState } from "react";
import toggleElementVisibility from "../../util/toggleElementVisibility";

function PersonalFormSection({ personalDetails, setPersonalDetails }) {
  const [draft, setDraft] = useState(personalDetails);

  function handleSubmit(e) {
    e.preventDefault();
    //can generalise function to go through all input values and create object from the input values to repeat for other forms
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const location = document.getElementById("locationInput").value;
    setPersonalDetails((prevState) => ({
      ...prevState,
      name: name,
      email: email,
      phone: phone,
      location: location,
    }));
    toggleElementVisibility("personalForm");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDraft((d) => ({ ...d, [name]: value }));
  }

  return (
    <section className="formButtonContainer">
      <button
        id="Personal Details"
        onClick={() => {
          toggleElementVisibility("personalForm");
        }}
      >
        Edit Personal Details
      </button>
      <form
        action=""
        className="personalForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Personal details</h3>
        <span className="basicInputWrapper">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="nameInput"
            name="name"
            onChange={(e) => handleChange(e)}
            value={draft.name}
          />
        </span>
        <span className="basicInputWrapper">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="emailInput"
            name="email"
            onChange={(e) => handleChange(e)}
            value={draft.email}
          />
        </span>
        <span className="basicInputWrapper">
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            id="phoneInput"
            name="phone"
            onChange={(e) => handleChange(e)}
            value={draft.phone}
          />
        </span>
        <span className="basicInputWrapper">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="locationInput"
            name="location"
            onChange={(e) => handleChange(e)}
            value={draft.location}
          />
        </span>
        <button type="submit">Submit Changes</button>
      </form>
    </section>
  );
}

export default PersonalFormSection;
