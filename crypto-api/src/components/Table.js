import React, { useState, useEffect } from "react";
import { CryptoState } from "../CryptoContext";
import { CoinList } from "../config/api";
import { formatNumber } from "../config/text";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import SmallChart from "./SmallChart";

const Table = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { curr, symbol } = CryptoState();

  const fetchList = async () => {
    const { data } = await axios.get(CoinList(curr));
    const coinList = data;
    setList(coinList);
  };

  const leftArrowHandler = () => {
    let pom = parseInt(page) - 1
    return pom > 1 ? setPage(pom) : setPage(1);
  };

  const rightArrowHandler = () => {
    let pom = parseInt(page) + 1
    return pom < 10 ? setPage(pom) : setPage(10);
  };

  const pageHandler = (e) => {
    if((!e.target.value < 1) || (!e.target.value >10)) {
      return setPage(e.target.value);
    }
  };

  const changeHandler = (e) => {
    return setSearch(e.target.value);
  };

  const searchHandler = () => {
    return list.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    fetchList();
  }, [list]);

  return (
    <div className="container">
      <div className="searchContainer">
        <div className="search">
          <input
            type="text"
            placeholder="Search coins"
            onChange={changeHandler}
            value={search}
          />
          <span className="glass">
            <FaSearch />
          </span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name </th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {searchHandler()
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((coin) => {
              return (
                <tr key={coin.market_cap_rank}>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                    <a href={`/coin/${coin.id}`}>
                      <img src={coin.image} alt="" />
                      <div className="coin-info">
                        {coin.name}
                        <span>{coin.symbol}</span>
                      </div>
                    </a>
                  </td>
                  <td>
                    {symbol}
                    {coin.current_price}
                  </td>
                  {coin.price_change_percentage_24h.toFixed(2) < 0 ? (
                    <td className="down">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="up">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}
                  <td>
                    {symbol}
                    {formatNumber(coin.market_cap)}
                  </td>
                  <td>
                    <div className="chart">
                      <SmallChart
                        id={coin.id}
                        change={coin.price_change_percentage_24h.toFixed(2)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="pages">
        <ul>
          <li>
            <button onClick={() => setPage(1)}>&laquo;</button>
          </li>
          <li>
            <button  onClick={leftArrowHandler}>&lsaquo;</button>
          </li>
          <li>
            <input type="number" value={page} onChange={pageHandler} min="1" max="10"/>
          </li>
          <li>
            <button onClick={rightArrowHandler}>&rsaquo;</button>
          </li>
          <li>
            <button onClick={() => setPage(10)}>&raquo;</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
