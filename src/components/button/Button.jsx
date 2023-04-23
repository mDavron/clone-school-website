import React from "react";
import "./Button.scss";
import icon from "../../assets/svg/button-icon.svg";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="btn">
      <Link to={"/form"}>
        <img src={icon} alt="" />
        Apply now
      </Link>
    </div>
  );
};

export default Button;
