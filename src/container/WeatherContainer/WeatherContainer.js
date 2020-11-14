import React, { useEffect, useState } from "react";
import { API_KEY, URL } from "../../API_DATA/API_DATA";
import axios from "axios";
import classes from "./WeatherContainer.module.css";
import Header from "../../component/Header/Header";
import { TextField, Typography } from "@material-ui/core";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState({
    current_temperature_celsius: "",
    current_condition_icon: "",
    current_conditon_text: "",
    current_location: "",
    selected_unit: "Celcius",
  });

  useEffect(() => {
    axios.get(`${URL}?key=${API_KEY}&q=Kanpur&days=3`).then((response) => {
      console.log(response);
      setWeatherData({
        current_temperature_celsius: response.data.current.temp_c,
        current_location: `${response.data.location.name}, ${response.data.location.country}`,
        current_condition_icon: response.data.current.condition.icon,
        current_condition_text: response.data.current.condition.text,
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.searchBar}>
          <TextField
            variant="outlined"
            label="Location"
            placeholder="Enter City Name/ Zip Code"
            onChange={(event) => {
              setWeatherData({
                ...weatherData,
                newSearchLocation: event.target.value,
              });
            }}
          />
        </div>
        <div className={classes.currentWeatherPane}>
          <Typography variant="h1">
            {weatherData.current_temperature_celsius}°
          </Typography>
          <Typography variant="subtitle1">
            {weatherData.current_location}
          </Typography>
        </div>
        <div className={classes.extraInfo}>
          <img
            src={weatherData.current_condition_icon}
            alt={weatherData.current_condition_text}
          />
          <Typography variant="subtitle1">
            {weatherData.current_condition_text}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
