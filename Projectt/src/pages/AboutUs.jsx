import { Outlet } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
    <Outlet/>
    <div className={styles.aboutus}>
      <div className={styles.content}>
        <h1>About AgroWeather</h1>
        <h3>An Attempt At Easing The Noble Act Of Feeding The Nation</h3>
        <p>
          Imagine a website that helps farmers get the most from their land.
          AgroWeather does just that! It uses tiny sensors, like affordable
          Arduino devices, to measure Physical Paarmeters.
        </p>
        <button>AgroWeather</button>
      </div>
      <img
        className={styles.img}
        src="../assets/Dashboard.png"
        alt="AgroWeather"
        width="600px"
      />
      <img
        className={styles.PhoneApp}
        src="../assets/PhoneApp1.png"
        alt="PhoneApp"
        width="100px"
      />
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </div>
    </>
  );
};

export default AboutUs;
