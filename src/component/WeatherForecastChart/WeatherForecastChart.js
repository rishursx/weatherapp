import React from "react";
import { Line } from "react-chartjs-2";

const weatherForecastChart = (props) => {
  const state = {
    labels: ["today", "tommorrow", "foremorrow"],
    datasets: [
      {
        label: "minimum temperature",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "red",
        borderColor: "yellow",
        borderWidth: 2,
        data: props.forecastData.forecastday.map((day) => {
          return day.day.maxtemp_c;
        }),
      },
      {
        label: "maximum temperature",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "yellow",
        borderColor: "red",
        borderWidth: 2,
        data: props.forecastData.forecastday.map((day) => {
          return day.day.mintemp_c;
        }),
      },
      {
        label: "average temperature",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "blue",
        borderColor: "aqua",
        borderWidth: 2,
        data: props.forecastData.forecastday.map((day) => {
          return day.day.avgtemp_c;
        }),
      },
    ],
  };
  console.log(props.forecastData);
  console.log(state);

  return (
    <div>
      <Line data={state} />
    </div>
  );
};

export default weatherForecastChart;
