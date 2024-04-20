import styles from "./RightBox.module.css";
import WelcomeBack from "./WelcomeBack";
import { useState, useEffect } from "react";
import Row1 from "./Row1";
import LineGraph from "./LineGraph";
// import { updateSensorDataAndExport, exportSensorData } from "../backendData.js";
// import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt'; // Assuming you have the MQTT library installed

const RightBox = () => {
  // Initialize sensor data with default or retrieved values
  const [parameters, setParameters] = useState({
    pressureValue: 50,
    altitudeValue: 0,
    humidityValue: 0,
    temperatureValue: 0,
    airQualityValue: 0,
  });

  useEffect(() => {
    // Connect to MQTT broker
    const brokerUrl = 'ws://192.168.55.201:9001';
    const client = mqtt.connect(brokerUrl);

    client.on('connect', () => {
      console.log('Connected to MQTT broker');

      // Subscribe to multiple topics
      const topics = [
        'sensor/BMP280/pressure',
        'sensor/BMP280/altitude',
        'sensor/DHT11/humidity',
        'sensor/DHT11/temperature',
        'sensor/MQ135/air_quality',
      ];

      topics.forEach(topic => client.subscribe(topic));
    });

    client.on('message', (topic, message) => {
      console.log(`Received message on topic: ${topic}, message: ${message.toString()}`);
      updateSensorData(topic, message);
    });

    // Cleanup on component unmount
    return () => client.end(); // Disconnect from the broker
  }, []);
  const handleIncrement = (i) => {
    const newParameters = parameters.map((p, index) => (i === index ? p + 10 : p));
    setParameters(newParameters);
  };
  const updateSensorData = (topic, message) => {
    const value = message.toString();

    setParameters(prevState => ({
      ...prevState,
      [topic.split('/')[2]]: value, // Update specific property based on topic
    }));
  };

  return (
    <div className={styles.rightbox}>
      <WelcomeBack />
      <div className={styles.graph}>
        <LineGraph Parameters={parameters}/>
      </div>
      <Row1 Parameters={parameters} />
    </div>
  );
};


  

  


export default RightBox;
