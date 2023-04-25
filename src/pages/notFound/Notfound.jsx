import React from "react";
import bg from "./images/404.png";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className={styles.notfound_wrapper}>
        <div className={styles.notfound_inner}>
          <img src={bg} alt="" />
          <h3>Sorry, an error occurred!</h3>
          <p>Press the button to the main menu.</p>
          <Link to={"/"}>Main menu &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
