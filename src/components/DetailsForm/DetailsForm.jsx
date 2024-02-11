import React from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  return (
    <>
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
              placeholder="Full name *"
            />
          </div>
          {/* <div className="formFieldsContainer bottomRow">
            <select className="inputField twoItems selectField">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <input
              className="inputField twoItems"
              type="text"
              placeholder="Full name *"
            />
          </div> */}
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
          </div>
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
          </div>
        </div>
      </div>
      <div class="straightLine"></div>
      <div className="detailsFormContainer">
        <p className="formHeader">Additional information</p>
        <p className="formDescription">
          We need a few more details to complete your reservation.
        </p>
        <div className="formFieldsContainer">
          <div
            className="firstRowForm"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              className="inputField"
              type="text"
              placeholder="Full name *"
            />
          </div>
          <div className="formFieldsContainer bottomRow">
            {/* <select className="inputField twoItems selectField">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select> */}
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
          </div>
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Full name *"
            />
          </div>
        </div>
      </div>
      <div class="straightLine"></div>
    </>
  );
};

export default DetailsForm;
