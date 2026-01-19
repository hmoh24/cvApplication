import toggleElementVisibility from "../../util/toggleElementVisibility";

function PersonalFormSection({ personalDetails, setPersonalDetails }) {
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

  return (
    <section className="formButtonContainer">
      <button
        id="Personal Details"
        onClick={() => {
          toggleElementVisibility("personalForm");
        }}
      >
        Personal Details
      </button>
      <form
        action=""
        className="personalForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3>Personal details</h3>
        <span>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder={personalDetails.name}
          />
        </span>
        <span>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="emailInput"
            name="email"
            placeholder={personalDetails.email}
          />
        </span>
        <span>
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            id="phoneInput"
            name="phone"
            placeholder={personalDetails.phone}
          />
        </span>
        <span>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="locationInput"
            name="location"
            placeholder={personalDetails.location}
          />
        </span>
        <button type="submit">Submit Changes</button>
      </form>
    </section>
  );
}

export default PersonalFormSection;
