import React from "react";
import styles from "./Future.module.scss";
import btnIcon from "../assets/svg/button-icon.svg";

const Future = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>
          Your Future Begins Here <br />
        </h1>
        <span className={styles.submenu}>
          Built Your Amazing And Beautiful Career With Us Together
        </span>
        <p>
          Admission is Open Now <br /> Admission is open for
          <span> grades 1-11 now.</span>
        </p>
        <a href="#">
          <img src={btnIcon} alt="" />
          Apply now
        </a>
      </div>
    </div>
  );
};

export default Future;
