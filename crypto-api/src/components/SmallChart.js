import React, { useState, useEffect } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";

const SmallChart = ({ id, change }) => {
  const [chartData, setChartData] = useState();
  const { curr } = CryptoState();

  const labels = chartData?.map((coin) => {
    let days = 7
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

  const checkChange = (change) => {
    return change < 0 ? "crimson" : "greenyellow";
  }

  const chartStuff = {
    labels: labels,
    datasets: [
      {
        label: "Chart",
        data: chartData?.map((coin) => coin[1]),
        fill: false,
        borderColor: checkChange(change),
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  useEffect(() => {
    const fetchChartData = async () => {
      const { data } = await axios
        .get(HistoricalChart(id, 7, curr))
        .then((data) => {
          return data;
        });
      return data;
    };

    fetchChartData().then((res) => setChartData(res.prices));
  }, []);

  return <Line data={chartStuff} options={options} />;
};

export default SmallChart;
