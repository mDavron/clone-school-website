import React from "react";
import styles from "./Launching.module.scss";
import Slide from "./Slide";

const Launching = () => {
  return (
    <div className={styles.launching}>
      <div className="container">
        <div className={styles.flex}>
          <Slide />
          <div className={styles.content}>
            <h2>The Launching of CIC School</h2>
            <p>
              CIC International School celebrated its launch at INHA University
              in Tashkent with it’s founder Umidjon Ishmukhamedov, as its host.
              The founder of the educational institution made Millat Umidi
              International School’s intentions very clear in order to provide
              merit students with opportunities that lead their studies to the
              Top Universities as well as also scholarships to pave the way for
              distinction students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launching;
