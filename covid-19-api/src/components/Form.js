import React, { useState, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";
import axios from "axios";
import Inf from "./Inf";
import planet from '../images/planet.png';

const Form = () => {
  const [country, setCountry] = useState("");

  const initialValues = {
    countryName: "",
    flag: "",
    totalCases: "",
    deaths: "",
    recovered: "",
    deathRate: "",
    todayCases: "",
    todayDeaths: "",
    critical: "",
  };
  const [values, setValues] = useState(initialValues);

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const fetchCases = (country) => {
    if (country !== "") {
      axios(`https://disease.sh/v3/covid-19/countries/${country}`).then((res) =>
        setValues({
          ...values,
          countryName: res.data.country,
          flag: res.data.countryInfo.flag,
          totalCases: "Cases: " + formatNumber(res.data.cases),
          deaths: "Deaths: " + formatNumber(res.data.deaths),
          recovered: "Recovered: " + formatNumber(res.data.recovered),
          deathRate:
            "Death rate: " +
            parseFloat((res.data.deaths / res.data.cases) * 100).toFixed(2) +
            "%",
          todayCases: "Cases: " + formatNumber(res.data.todayCases),
          todayDeaths: "Deaths: " + formatNumber(res.data.todayDeaths),
          critical: "Critical: " + formatNumber(res.data.critical),
        })
      );
    }
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCases(country);
    setCountry("");
  };

  const fetchWorldwide = () => {
    axios("https://disease.sh/v3/covid-19/all").then((res) =>
      setValues({
        ...values,
        countryName: "World",
        flag: planet,
        totalCases: "Cases: " + formatNumber(res.data.cases),
        deaths: "Deaths: " + formatNumber(res.data.deaths),
        recovered: "Recovered: " + formatNumber(res.data.recovered),
        deathRate:
          "Death rate: " +
          parseFloat((res.data.deaths / res.data.cases) * 100).toFixed(2) +
          "%",
        todayCases: "Cases: " + formatNumber(res.data.todayCases),
        todayDeaths: "Deaths: " + formatNumber(res.data.todayDeaths),
        critical: "Critical: " + formatNumber(res.data.critical),
      })
    );
    console.log(values.flag)
  };

  useEffect(() => {
    fetchCases("Serbia");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for countries"
          value={country}
          onChange={handleChange}
        />

        <div className="buttons">
          <button type="submit">
            Search <VscSearch style={{ fontSize: "10pt" }} />
          </button>
          <button type="submit" onClick={fetchWorldwide}>
            Worldwide
          </button>
        </div>
      </form>
      <Inf country={{ ...values }} />
    </div>
  );
};

export default Form;
