import React from "react";
import { CryptoState } from "../CryptoContext";
import {currencies} from "../config/data";


const Header = () => {
  const { curr, setCurr } = CryptoState();

  const changeHandler = (e) => {
    setCurr(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__left">
        <h2>
          <a href="/">Cryptoworld</a>
        </h2>
      </div>
      <div className="header__right">
        <select name="currencies" value={curr} onChange={changeHandler}>
          {currencies.map((c) => {
            return <option key={c.name} value={c.name}>{c.symbol + c.name}</option>;
          })}
        </select>
      </div>
    </header>
  );
};

export default Header;
