import React from "react";
import styles from "./Portfolio.module.scss";
import cup from "../../assets/images/porfolioImg/cup.svg";
import book from "../../assets/images/porfolioImg/book.svg";
import list from "../../assets/images/porfolioImg/list.svg";
import bg from "../../assets/images/porfolioImg/artist.jpg";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className="container">
        <section className={styles.portfolio_desc}>
          <h1 className={styles.desc_title}>Excellent Student Portfolio</h1>
          <p className={styles.desc_text}>
            Student Portfolio is an integral part of each student's application
            advancing from high school to a university.
            <strong> Cambridge International College </strong> provides all
            necessary tools for students to build their portfolios that stand
            out. Students in CIC will have the chance to enter Top Universities
            worldwide and have the opportunity to study based on scholarships.
          </p>
        </section>
        <section className={styles.portfolio_details}>
          <div className={styles.left}>
            {data.map((item, index) => {
              const { icon, title, text } = item;
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.bg}>
                    <img src={icon} alt="" />
                  </div>

                  <div>
                    <div className={styles.item_content}>
                      <h1 className={styles.item_content_title}>{title}</h1>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={bg} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;

const data = [
  {
    icon: cup,
    title: "Scholarships",
    text: `Our students have a chance to study on scholarship in Top Universities wordwide.`,
  },
  {
    icon: list,
    title: "Certificate",
    text: `Certificate
    Students completing CIC's school are awarded with Secondary School Certificateand students areenrolled for SAT exams`,
  },
  {
    icon: book,
    title: "Learning Program",
    text: `Learning Program
    Students at CIC will have a learning program designed to enhance student's academic skills in STEM fields in addition to local educational programs.`,
  },
];
