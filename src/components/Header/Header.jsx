import React, { useEffect, useState } from "react";
import "./Header.css";
import TicketeLogo from "../SVGIcons/ticketeLogo";
import Checkout from "../SVGIcons/checkout";
import Help from "../SVGIcons/help";
import BackArrow from "../SVGIcons/backArrow";
import HelpSmall from "../SVGIcons/helpSmall";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming 768px as a breakpoint for mobile devices

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="headerContainer">
      {/* <div>
        <TicketeLogo />
      </div> */}
      <div>{isMobile ? <BackArrow /> : <TicketeLogo />}</div>
      <div>
        <Checkout />
      </div>
      {/* <div>
        <Help />
      </div> */}
      <div>{isMobile ? <HelpSmall /> : <Help />}</div>
    </div>
  );
};

export default Header;
