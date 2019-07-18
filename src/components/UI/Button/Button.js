import React from "react";
const button = props => (
  <button
    disabled={props.disabled}
    style={{
      margin: "0 auto",
    }}
    className={
      "button is-primary is-fullwidth"
    }
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default button;
