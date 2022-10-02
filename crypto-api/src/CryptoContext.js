import React, { createContext, useContext, useState, useEffect } from "react";
import {currencies} from "./config/data";

//? kreiranje konteksta za globalne stejtove za valute i simbole

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [curr, setCurr] = useState(currencies[0].name);
  const [symbol, setSymbol] = useState(currencies[0].symbol);

  useEffect(() => {
    if (curr === currencies[0].name) setSymbol(currencies[0].symbol);
    else if (curr === currencies[1].name) setSymbol(currencies[1].symbol);
    else if (curr === currencies[2].name) setSymbol(currencies[2].symbol);
  }, [curr]);

  return (
    <Crypto.Provider value={{ curr, symbol, setCurr }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
