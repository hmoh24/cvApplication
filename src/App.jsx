import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="sideBar">
        <h1>CV Application</h1>
      </section>
      <Main />
    </>
  );
}

export default App;
