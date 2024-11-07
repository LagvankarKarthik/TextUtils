import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#0e031c",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1>About us</h1>
      <div
        className="accordion"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#0e031c",
          color: props.mode === "light" ? "black" : "white",
        }}
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0e031c",
                color: props.mode === "light" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text.</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0e031c",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your textquickly and
              effeciently. Be it word count, charecter count or estimate the
              time required for reading your text. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo reiciendis ut repellendus
              veritatis quod ea. Nisi illo consequuntur dolorum doloremque.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0e031c",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0e031c",
                color: props.mode === "light" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Helpful features.</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0e031c",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              You can easily convert your text to{" "}
              <strong>
                upper case, lower case copy text, remove extra spaces
              </strong>{" "}
              and many more features... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maiores, cupiditate!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#0e031c",
                color: props.mode === "light" ? "black" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Compatibility</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0e031c",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Be it your mobile phone, your tables or your laptop, the app is
                optimized to work with all of them.
              </strong>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              veniam autem sequi iste doloribus eum eligendi dolorum minus quae,
              ad tenetur, labore deserunt numquam voluptatibus perspiciatis
              aperiam? Repellendus, quia exercitationem.
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
