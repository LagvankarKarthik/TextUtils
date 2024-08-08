import { useState } from "react";
import "./App.css";
//import About from "./componens/About";
import Navbar from "./componens/Navbar";
import TextForm from "./componens/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //This is to check wheather the dark mode is enbled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e031c";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter your text here:" mode={mode} />
      {/*<About />*/}
    </div>
  );
}

export default App;
