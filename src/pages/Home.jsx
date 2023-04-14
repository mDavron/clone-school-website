import React from "react";
import HeroSlider from "../components/HeroSlider";
import styles from "./Home.module.scss";
import Header from "../components/Header";
import Branches from "../components/Branches";
import Future from "../components/Future";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <HeroSlider />
      <Branches />
      <Future />
    </div>
  );
};

export default Home;
