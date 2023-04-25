import React from "react";
import "./Button.scss";
// import icon from "../../assets/svg/button-icon.svg";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className=" custom-btn btn-8">
      <span>
        <Link to={"/form"}>Apply now</Link>
      </span>
    </button>
  );
};

export default Button;
