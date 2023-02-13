import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement
);

export default function WelData() {
  const [chartData, setChartData] = useState(null);

  // to need add exception if month = 0, then do year - 1

  const current = new Date();

  const month = (current.getMonth() + 1).toString().padStart(2, "0");
  const day = current.getDate().toString().padStart(2, "0");
  const date = `${current.getFullYear()}-${month}-${day}`;

  const earlierMonth = current.getMonth().toString().padStart(2, "0");
  const earlierDay = current.getDate().toString().padStart(2, "0");
  const earlierDate = `${current.getFullYear()}-${earlierMonth}-${earlierDay}`;

  useEffect(() => {
    const setData = async () => {
      let apiurl =
        "https://archive-api.open-meteo.com/v1/archive?latitude=-41.29&longitude=174.78&start_date=" +
        earlierDate +
        "&end_date=" +
        date +
        "&daily=precipitation_sum&timezone=Pacific%2FAuckland";
      const { data } = await axios.get(apiurl);

      setChartData({
        labels: data.daily.time.map((item) => item),
        datasets: [
          {
            label: "Rainfall (mm)",
            data: data.daily.precipitation_sum.map((item) => item),
            fill: true,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.3)",
          },
        ],
      });
    };

    setData();
  }, []);

  return (
    <div className="chart">
      {chartData && chartData.datasets && (
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Wellington Rainfall (Past Month)",
              },
            },
          }}
          data={chartData}
        />
      )}
    </div>
  );
}
