import React from "react";
import styles from "./BigBox.module.css";
import RightBox from "./RightBox.jsx";
import AppWidget from "./AppWidget.jsx";
import { Outlet } from "react-router-dom";

const BigBox = () => {
  return (
    <>
    <Outlet/>
    <div className={styles.Dashboard}>
    <div className={styles.bigbox}>
      <AppWidget />
      <RightBox />
    </div>
    </div>
    </>
  );
};

export default BigBox;
