import styles from "./AppWidget.module.css";
import axios from "axios";
import { useState } from "react";

const AppWidget = () => {
  const [Data, setData] = useState({});
  const [Location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=91802c7b2a8095d0e8809721740e8cbc`;

  const changeLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
    setLocation("");
  };
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.top}>
          <input
            type="text"
            placeholder="Enter Location"
            className={styles.input}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={changeLocation}
          />
          <div className={styles.location}>
            {Data.name ? <p> {Data.name} </p> : <p>Dallas</p>}
          </div>
          <div className={styles.temp}>
            {Data.main ? (
              <h1> {Math.floor(Data.main.temp - 273)}°C </h1>
            ) : (
              <h1>60°C</h1>
            )}
            <div className={styles.description}>
              {Data.weather ? <p> {Data.weather[0].main} </p> : <p>Clouds</p>}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.feels}>
            <p>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className={styles.humidity}>
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className={styles.wind}>
            <p>13mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWidget;
