import React from "react";
import styles from "./Facilities.module.scss";
import Slide from "../slide/Slide";

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <div className="container">
        <div className={styles.flex}>
          <Slide />
          <div className={styles.content}>
            <h2>Our Facilities</h2>
            <p>
              We at Millat Umidi School believe having modern and comfortable
              facilities is an essential part of nourishing one’s education. A
              tour around the grounds will reveal a school that buzzes with
              activities.
            </p>
            <p>
              School grounds include computer suites, a kitchen, fully equipped
              classrooms, an indoor sports arena, an outdoor sports area, and a
              library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
