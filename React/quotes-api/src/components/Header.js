import React from "react";

const Header = ({ heading }) => {
  return (
    <header className="header">
      <h1>{heading}</h1>
      <h3>Get inspired.</h3>
    </header>
  );
};

export default Header;
