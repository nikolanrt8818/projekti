import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </header>
  );
};

export default Header;
