import React from "react";
import styles from "./Branches.module.scss";
import man from "../assets/images/branches/hero.jpg";
const Branches = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.flex}>
          <img className={styles.img} src={man} alt="" />
          <div className={styles.content}>
            <h2>
              Study at one of our 3 CIC School <br /> Branches in Uzbekistan
            </h2>
            <ul>
              <li>
                <span>IBN SINO Branch -</span> Grade 1 - 11
              </li>
              <li>
                <span>A. NAVOI Branch -</span> Grade 7 - 11
              </li>
              <li>
                <span>SAMARKAND Branch -</span> Grade 5 - 11
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
