import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import call from "../../assets/svg/call.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const toggLeMenu = () => {
    setLang(lang == "uz" ? "en" : "uz");
    setOpen(!open);
  };
  return (
    <header
      className={`${styles.header} ${
        location.pathname !== "/" ? styles.bgBlack : " "
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact us</Link>
            </li>
            <li>
              <Link to={"/apply-now"}>Apply now</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <img src={call} alt="" />
          <span>+998 71 200 0308</span>
        </div>
        <div onClick={() => setOpen(!open)} className={styles.lang}>
          {lang}
          <img
            src={menuIcon}
            alt=""
            style={open ? { transform: "rotate(180deg)" } : null}
          />
          {open && (
            <div className={styles.subMenu}>
              <span onClick={toggLeMenu}>{lang == "uz" ? "en" : "uz"}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
