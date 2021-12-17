import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </header>
  );
};

export default Header;
