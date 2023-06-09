import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import logo from "../../assets/images/footerIcons/logo.svg";
import { footerData } from "./data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_inner}>
          <div className={styles.footer_left}>
            <img className={styles.footer_logo} src={logo} alt="" />
            <div className={styles.connections}>
              <h2>Connections</h2>
              <ul>
                {footerData.items.map((item, i) => {
                  const { icon, text } = item;
                  return (
                    <li className={`${styles.list} ${styles.flex}`} key={i}>
                      <img src={icon} alt="" />
                      <Link to={"/"}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.footer_center}>
            <div className={styles.footer_centerLeft}>
              <h2 className={styles.list_title}>Home Page</h2>
              <ul>
                {footerData.items1.map((item, i) => {
                  return (
                    <li className={styles.list_item} key={i}>
                      <Link to={"/"}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_centerRight}>
              <h2 className={styles.list_title}>Page</h2>
              <ul>
                {footerData.items2.map((item, i) => {
                  return (
                    <li className={styles.list_item} key={i}>
                      <Link to={item.url}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.footer_right}>
            <h2 className={styles.footer_right_title}>Follow Us</h2>
            <div className={styles.social_icons}>
              {footerData.items3.map((icons, i) => (
                <span key={i}>
                  <img src={icons.icon} alt="alt" />
                </span>
              ))}
            </div>
            <form className={styles.footer_form} action="#">
              <h2 className={styles.form_title}>Have Any Questions?</h2>
              <input
                className={styles.form_input}
                type="text"
                name="fullname"
                placeholder="Name"
              />
              <input
                className={styles.form_input}
                type="email"
                name="email"
                placeholder="Mail addres"
              />
              <p>
                <label htmlFor="w3review">Type Something</label>
              </p>
              <textarea
                className={styles.form_textarea}
                id="message"
                name="message"
                rows="2"
                cols="40"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
