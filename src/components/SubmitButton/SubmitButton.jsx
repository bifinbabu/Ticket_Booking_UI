import React from "react";
import "./SubmitButton.css"; // Make sure to create this CSS file in the same directory
import LockIcon from "../SVGIcons/lockIcon";

const SubmitButton = (props) => {
  return (
    <button
      className={props?.fullWidth ? "submitButtonFullWidth" : "submitButton"}
    >
      {props?.isChat ? (
        "Chat with us"
      ) : (
        <>
          <LockIcon />
          {"Confirm & pay"}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
