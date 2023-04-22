import React from "react";
import HeroSlider from "../components/heroslider/HeroSlider";
import styles from "./Home.module.scss";
import Header from "../components/header/Header";
import Branches from "../components/branches/Branches";
import Future from "../components/future/Future";
import Launching from "../components/launching/Launching";
import Facilities from "../components/facilities/Facilities";
import School from "../components/school/School";
import Faq from "../components/faq/Faq";
import Portfolio from "../components/portfolio/Portfolio";
import Partners from "../components/partners/Partners";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <HeroSlider />
      <Branches />
      <Future />
      <Launching />
      <Facilities />
      <School />
      <Faq />
      <Portfolio />
      {/* <Partners /> */}
    </div>
  );
};

export default Home;
