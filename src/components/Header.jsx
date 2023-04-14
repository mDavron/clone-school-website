import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../assets/svg/logo.svg";
import call from "../assets/svg/call.svg";
import menuIcon from "../assets/svg/menu-icon.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("uz");

  const toggLeMenu = () => {
    setLang(lang == "uz" ? "en" : "uz");
    setOpen(!open);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Apply now</a>
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
