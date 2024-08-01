import "./App.css";
//import About from "./componens/About";
import Navbar from "./componens/Navbar";
import TextForm from "./componens/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About us" />
      <TextForm heading="Enter your text here:" />
      {/*<About />*/}
    </div>
  );
}

export default App;
