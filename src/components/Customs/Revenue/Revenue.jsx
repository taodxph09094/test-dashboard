import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import monthly from "../../../data/monthly";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Revenue = () => {
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },

      {
        label: "My second dataset",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 79, 50, 41, 16, 85, 20],
      },
    ],
  };
  return <div>{/* <Bar options={options} data={data} />; */}</div>;
};

export default Revenue;
