import React from "react";
import classes from "./Input.css";
const input = props => {
  const inputClasses = [classes.inputElement];
  let inputElement = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={"input " + inputClasses.join(" ")}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={"textarea " + inputClasses.join(" ")}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
  }
  // all the other code from the videos

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p>Please enter a valid value!</p>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};
export default input;
