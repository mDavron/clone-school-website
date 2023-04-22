import React from "react";
import styles from "./School.module.scss";
import Slide from "../slide/Slide";

const School = () => {
  return (
    <div className={styles.school}>
      <div className="container">
        <div className={styles.flex}>
          <Slide />
          <div className={styles.content}>
            <h2>Achieving Excellence Together</h2>
            <p>
              <span>Millat Umidi International School</span> will give you the
              opportunity to be ready to study at top international universities
              such as <span> MIT, Harvard, Yale </span> and others on full ride
              scholarship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
