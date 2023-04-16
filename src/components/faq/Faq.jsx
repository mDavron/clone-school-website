import React from "react";
import styles from "./Faq.module.scss";
import bg from "../../assets/images/faq/bg.svg";

const Faq = () => {
  return (
    <div className={styles.faq} style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <h1>5 Reasons Why You Should Choose CIC School</h1>
        <div className={styles.flex}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h2>Admission is Open Now</h2>
            <p>
              Admission is open for <span>grades 1-11 now.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
