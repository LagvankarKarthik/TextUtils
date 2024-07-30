import "./App.css";
import Navbar from "./componens/Navbar";
import TextForm from "./componens/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About us" />
      <TextForm heading="Enter your text here:" />
    </div>
  );
}

export default App;
