import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/headerIcons/logo.svg";
import phoneCall from "../../assets/images/headerIcons/call.svg";
import iconDown from "../../assets/images/headerIcons/icon-down.svg";
// Hamburger and close menu
import hamburgerMenuIcon from "../../assets/images/headerIcons/menu.svg";
import closeMenuIcon from "../../assets/images/headerIcons/close-menu.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const [menuActive, setMenuActive] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const completedClass = menuActive ? styles.active : " ";
  // CHANGE NAVBAR BG ON SCROLL
  const [navBg, setNavBg] = useState(false);

  const toggLeMenu = () => {
    setLang(lang === "uz" ? "en" : "uz");
    setLangMenuOpen(!langMenuOpen);
  };
  const isHome = location.pathname === "/" ? true : false;

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <header
      className={styles.header}
      style={
        (isHome && navBg) || location.pathname !== "/"
          ? { background: "rgb(37, 32, 32)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container">
        <div className={styles.header_inner}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={`${styles.nav_menu} ${completedClass}`}>
            <nav>
              <ul>
                <li onClick={() => setMenuActive(false)}>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <NavLink to={"/about"}>About us</NavLink>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <NavLink to={"/contacts"}>Contact us</NavLink>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <NavLink to={"/form"}>Apply now</NavLink>
                </li>
                <div className={styles.contact}>
                  <img src={phoneCall} alt="" />
                  <span>+998 71 200 0308</span>
                </div>
              </ul>
              <div
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={styles.lang}
              >
                {lang}
                <img
                  src={iconDown}
                  alt=""
                  style={langMenuOpen ? { transform: "rotate(180deg)" } : null}
                />
                {langMenuOpen && (
                  <div className={styles.subMenu}>
                    <span onClick={toggLeMenu}>
                      {lang === "uz" ? "en" : "uz"}
                    </span>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div
            className={styles.mobileMenu}
            onClick={() => setMenuActive(!menuActive)}
          >
            {menuActive ? (
              <img src={closeMenuIcon} />
            ) : (
              <img src={hamburgerMenuIcon} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
