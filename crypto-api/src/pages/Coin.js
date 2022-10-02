import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import axios from "axios";
import parseHtml from "html-react-parser";
import { formatNumber } from "../config/text";
import BigChart from "../components/BigChart";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { curr, symbol } = CryptoState();

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
      return data;
    };

    fetchCoin().then((res) => setCoin(res));
  }, []);

  return (
    <div className="container">
      <div className="coin">
        <div className="coin__head">
          <a href="/" className="backLink">
            &lsaquo;
          </a>
          <img src={coin?.image.small} alt="coin" />
          <h1>
            {coin?.name} <span>{coin?.symbol}</span>
          </h1>
        </div>
        <div className="coin__desc">
          {coin?.description.en === "" ? (
            <p>This cryptocurrency does not have any description.</p>
          ) : (
            parseHtml(`<p>${coin?.description.en.split(". ")[0]}.</p>`)
          )}
        </div>
        <div className="coin__body">
          <div className="chartContainer">
            <BigChart id={coin?.id} />
          </div>
          <div className="add-info">
            <p>
              <span>Market Cap Rank: </span> {coin?.market_cap_rank}
            </p>
            <p>
              <span>Market Cap: </span> {symbol}
              {formatNumber(
                coin?.["market_data"]["market_cap"][curr.toLowerCase()]
              )}
            </p>
            <p>
              <span>Price: </span> {symbol}
              {coin?.["market_data"]["current_price"][curr.toLowerCase()]}
            </p>
            {coin?.["market_data"]["price_change_percentage_24h"].toFixed(2) <
            0 ? (
              <p className="down">
                <span>Price Change 24h: </span>
                {coin?.["market_data"]["price_change_percentage_24h"].toFixed(
                  2
                )}
                %
              </p>
            ) : (
              <p className="up">
                <span>Price Change 24h: </span>
                {coin?.["market_data"]["price_change_percentage_24h"].toFixed(
                  2
                )}
                %
              </p>
            )}
            <p>
              <span>Webiste: </span>
              <a
                href={coin?.links.homepage[0]}
                rel="noreferrer"
                target="_blank"
              >
                {coin?.links.homepage[0]}
              </a>
            </p>
            <div>
              <span>Categories: </span>
              {coin?.categories.map((cat, index) => {
                return (
                  <p  key={index}>
                    <small>{cat}</small>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
