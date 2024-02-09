import React from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  return (
    <div className="detailsFormContainer">
      <p className="formHeader">Enter your details</p>
      <p className="formDescription">
        We'll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </p>
      <div className="formFieldsContainer">
        <div
          className="firstRowForm"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            className="inputField"
            type="text"
            // style={{ width: "100%", borderRadius: "15px", padding: "10px" }}
            placeholder="Full name *"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
