import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log("Upper case");
    props.showAlert(" Converrted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converrted to lowerrcase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Cleared textbox", "success");
  };
  const handleCopyClick = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" Text copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); //This will be used whenever we use text area. This is for taking text as input in this case. This says when the user types something in the textbox, set the value = text.
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0e031c",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summery</h3>
        <p>
          Your text has {text.split(" ").length} words, and {text.length}{" "}
          charecters.
        </p>
        <p>
          It will take {text.split(" ").length * 2.4} seconds or{" "}
          {text.split(" ").length * 0.008} minutes to read.
        </p>
        <h3>Preview</h3>
        <p>{text.length === 0 ? "Enter your text in the box bove" : text}</p>
      </div>
    </>
  );
}
export default TextForm;
//text.split("") gives us an array. .length gives us the number of words.
