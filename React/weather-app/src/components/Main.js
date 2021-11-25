import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const initialValues = {
    name: "",
    icon: "",
    description: "",
    temp: "",
    humidity: "",
    speed: "",
  };

  const [values, setValues] = useState(initialValues);
  const [city, setCity] = useState("");

  const apiKey = "ec264fd8c4ebfad8f964a563162631f4";
  const fetchWeather = (city) => {
    if (city !== "") {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((res) =>
          setValues({
            ...values,
            name: res.data.name,
            icon: res.data.weather[0].icon,
            description: res.data.weather[0].description,
            temp: res.data.main.temp + " °C",
            humidity: "Humidity: " + res.data.main.humidity + "%",
            speed: "Wind speed: " + res.data.wind.speed + " km/h",
          })
        )
        .catch((err) => console.error(err));
      setCity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather("Belgrade");
    // eslint-disable-next-line
  }, []);
  
  const ico = `https://openweathermap.org/img/wn/${values.icon}.png`;
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return (
    <div className="main">
      <div className="weather">
        <h1>Weather</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={city || ""}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleClick}>
            Search
          </button>
        </form>

        <div className="weatherInf">
          <h2>{values.name}</h2>
          <h1>{values.temp} </h1>
          <img src={ico} alt="icon" />
          <h3>{capitalize(values.description)}</h3>
          <p>{values.humidity}</p>
          <p>{values.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
