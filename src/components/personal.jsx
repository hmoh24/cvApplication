function Personal({ name, email, phone, location }) {
  return (
    <section className="personal">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{location}</p>
    </section>
  );
}

export default Personal;
