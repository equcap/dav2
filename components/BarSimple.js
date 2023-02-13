import React from "react";

import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Rainfall (mm)",
      data: [12, 80, 0, 21, 83, 45, 23],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(250, 128, 114, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(250, 128, 114, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarExample = () => {
  return (
    <div>
      <h2 className="font-bold">Rainfall in Auckland in Past Week</h2>
      <Bar
        data={data}
        width={400}
        height={120}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarExample;

// https://api.open-meteo.com/v1/forecast?latitude=-36.85&longitude=174.76&daily=precipitation_sum&timezone=Pacific%2FAuckland&past_days=31
