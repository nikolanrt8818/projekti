import React from "react";

const Inf = ({ country }) => {

  return (
    <div className="covid-panel">
      <h2>
        {country.countryName} 
      </h2>
         <img src={country.flag} alt="flag" height="32px" />
      <h3>Total:</h3>
      <div className="total">
        <p>{country.totalCases}</p>
        <p>{country.recovered}</p>
        <p>{country.deaths}</p>
        <p>{country.deathRate}</p>
      </div>
      <h3>Today:</h3>
      <div className="daily">
        <p>{country.todayCases}</p>
        <p>{country.critical}</p>
        <p>{country.todayDeaths}</p>
      </div>
    </div>
  );
};

export default Inf;
