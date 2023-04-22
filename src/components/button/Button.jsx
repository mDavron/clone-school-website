import React from "react";
import "./Button.scss";
import icon from "../../assets/svg/button-icon.svg";

const Button = () => {
  return (
    <div className="btn">
      <a href="#">
        <img src={icon} alt="" />
        Apply now
      </a>
    </div>
  );
};

export default Button;
