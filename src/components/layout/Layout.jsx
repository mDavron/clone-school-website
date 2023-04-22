import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Partners from "../partners/Partners";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default Layout;
