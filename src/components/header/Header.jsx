import React from "react";
import "./header.css";
import CTA from "./CTA";
// import Me from "../../assets/kaiser.JPG";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi !</h5>
        <h1>Gilbert Intabo</h1>
        <h4 className="text__light">
          I specialize in creating sites for individuals and small businesses.
        </h4>

        <CTA />
        <HeaderSocials />
        {/* <div>
          <div className="me">
            <img src={Me} alt="my" />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
