import { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Time = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  return `${hour}-${minute}-${second}`;
};

const LineGraph = (props) => {
  const [dataSet, setDataset] = useState([0]);
  const labels = useRef([0]);
  const temperature=props.temperatureValue;

  useEffect(() => {
    console.log(props);
    const temperature= props.Parameters.temperature;
    console.log(props.Parameters.temperature);
    const interval = setInterval(() => {

      if (labels.current.length > 10) {
        const newLabels = labels.current.slice(1, dataSet.length);
        const newLabel = Math.floor(Math.random() * 1000);
        labels.current.value = [...newLabels, newLabel];
      } else {
        labels.current = [...labels.current, Time()];
      }
      setDataset((dataSet) => {
        if (dataSet.length > 10) {
          const newDataSet = dataSet.slice(1, dataSet.length);
          const newValue = Math.floor(Math.random() * 1000);
          return [...newDataSet, newValue];
        } else {
          const newValue = Math.floor(Math.random() * 1000);
          return [...dataSet, newValue];

        }
      });
      
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [props]);


  const data = {
    labels: labels.current,
    datasets: [
      {
        data: dataSet,
        fill: true,
        backgroundColor: "rgb(92, 158, 231)",
        borderColor: "rgb(92, 158, 231)",
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "rgb(92, 158, 231)",
        pointBorderColor: "rgb(92, 158, 231)",
        pointHoverBackgroundColor: "rgb(92, 158, 231)",
        pointHoverBorderColor: "rgb(92, 158, 231)",
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };
  return (
    <>
      <Line data={data}></Line>
    </>
  );
};

export default LineGraph;
