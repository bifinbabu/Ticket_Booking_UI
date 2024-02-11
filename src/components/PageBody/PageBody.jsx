import React from "react";
import "./PageBody.css";
import InfoIcon from "../SVGIcons/infoIcon";
import DetailsForm from "../DetailsForm/DetailsForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Carousel from "../CarouselContainer/CarouselContainer";

const PageBody = () => {
  return (
    <div className="mainContainer">
      {/*  */}
      <div className="confirmAndPayContainer">
        <span className="confirmTextDeskTop">Confirm & pay</span>
        <div className="freeCancellationContainer">
          <div className="freeCancellationFirstRow">
            <p className="freeCancellationFirstRowPara">Free cancellation</p>
            <p>
              <InfoIcon />
            </p>
          </div>
          <div className="freeCancellationSecondRow">
            <p>Tickets can be cancelled by 13th December, 2022.</p>
          </div>
        </div>
        <DetailsForm />
        <PaymentForm />
      </div>
      {/*  */}
      <div className="carouselContainer">
        <span className="confirmTextMobile">Confirm & pay</span>
        <div className="carouselInnerContainer">
          <Carousel />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default PageBody;
