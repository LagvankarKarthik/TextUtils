import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  //This takes a word as an input, convert the word to lowercase, then return the word with the letter at index 0 converted to the uppercase and slice the word from 1st index and add it to the letter that has been converted to the uppercase.
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
