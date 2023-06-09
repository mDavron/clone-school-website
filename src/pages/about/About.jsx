import React from "react";
import styles from "./About.module.scss";
import Slide from "../../components/slide/Slide";
import Button from "../../components/button/Button";
import { aboutSlideData } from "../../assets/data";
import bgAbout from "./images/about2.jpg";

import { cardData } from "./card/data";
import Card from "./card/Card";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.about}>
      <div className={styles.about_top}>
        <div className="container">
          <div className={styles.about_inner}>
            <div className={styles.about_left}>
              <Slide data={aboutSlideData} />
            </div>
            <div className={styles.about_right}>
              <h2 className={styles.about_title}>
                Welcome To Cambridge <br /> International College
              </h2>
              <p className={styles.about_text}>
                CIC - a private high school where students can get not only the
                basic school knowledge, but also be prepared for SAT and IELTS
                exams – fundamental requirements to enter top international
                universities abroad.
              </p>
              <p className={styles.about_text}>
                Easily accessible location and the most advanced technologies
                make CIC unlike other schools, and allow young students to study
                in interactive learning atmosphere. We offer a 2-year education,
                10th-11th grades with in-depth English learning environment.
                With us, learners will be prepared for the most fundamental
                internationally recognized examinations – SAT and IELTS.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT BOTTOM */}
      <div className={styles.about_bottom}>
        <div className="container">
          <div className={styles.about_inner}>
            <div className={styles.about_left}>
              <h2 className={styles.about_bottom_title}>
                Admission is Open Now
              </h2>
              <p className={styles.about_bottom_subTitle}>
                Admission is open for <span>grades 1-11 now</span>
              </p>
              <Button />
            </div>
            <div className={styles.about_right}>
              <img className={styles.bgAbout} src={bgAbout} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.cards_wrapper}>
        <div className="container">
          <div className={styles.cards_inner}>
            {cardData.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
