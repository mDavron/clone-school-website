import React from "react";
import HeroSlider from "../../components/heroslider/HeroSlider";
import styles from "./Home.module.scss";
import Branches from "../../components/branches/Branches";
import Future from "../../components/future/Future";
import Launching from "../../components/launching/Launching";
import Facilities from "../../components/facilities/Facilities";
import School from "../../components/school/School";
import Faq from "../../components/faq/Faq";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.home}>
      <HeroSlider />
      <Branches />
      <Future />
      <Launching />
      <Facilities />
      <School />
      <Faq />
      <Portfolio />
    </div>
  );
};

export default Home;
