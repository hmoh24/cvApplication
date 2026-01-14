import Personal from "./personal";
import { personalDetails } from "./cvData";

function Main() {
  return (
    <main>
      <Personal
        name={personalDetails.name}
        email={personalDetails.email}
        phone={personalDetails.phone}
        location={personalDetails.location}
      />
    </main>
  );
}

export default Main;
