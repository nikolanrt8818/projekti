import React, { useState, useEffect } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../config/api";
import { Line } from "react-chartjs-2";
import { chartDays } from "../config/data";
import { capitalize } from "../config/text";
import axios from "axios";

const BigChart = ({ id }) => {
  const [chartData, setChartData] = useState();
  const [days, setDays] = useState(1);
  const { curr } = CryptoState();

  const labels = chartData?.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

  const chartStuff = {
    labels: labels,
    datasets: [
      {
        label: capitalize(id),
        data: chartData?.map((coin) => coin[1]),
        fill: false,
        borderColor: "#00a9e0",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size:20
          },
          boxWidth:0
        }
      }
    }
  };

  const changeHandler = (e) => {
    setDays(e.target.value);
  }

  useEffect(() => {
    const fetchChartData = async () => {
      const { data } = await axios
        .get(HistoricalChart(id, days, curr))
        .then((data) => {
          return data;
        });
      return data;
    };

    fetchChartData().then((res) => setChartData(res.prices));
  });

  return (
    <div className="bigChart">
      <Line data={chartStuff} options={options} />
      <select name="" id="" onChange={changeHandler}>
        {chartDays.map((day) => {
          return <option key={day.name} value={day.value}>{day.name}</option>
        })}
      </select>
    </div>
  );
};

export default BigChart;
