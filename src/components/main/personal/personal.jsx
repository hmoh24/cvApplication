import "./personal.css";

function Personal({ name, email, phone, location }) {
  return (
    <section className="personal cvSection">
      <h2 id="cvName">{name}</h2>
      <section className="personalDetails">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{location}</p>
      </section>
    </section>
  );
}

export default Personal;
