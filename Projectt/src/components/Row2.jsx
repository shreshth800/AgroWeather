import styles from "./Row2.module.css";

const Row2 = (props) => {
  return (
    <div className={styles.row2}>
      <h3
        className={`${styles.TEMP} ${styles.ELE} `}
        onClick={() => props.handleIncriment(0)}
      >
        TEMPERATURE
      </h3>
      <h3 className={`${styles.HUM} ${styles.ELE} `}>HUMIDITY</h3>
      <h3 className={`${styles.AQI} ${styles.ELE} `}>AQI</h3>
      <h3 className={`${styles.PRES} ${styles.ELE} `}>PRESSURE</h3>
      <h3 className={`${styles.ALT} ${styles.ELE} `}>ALTITUDE</h3>
    </div>
  );
};

export default Row2;
