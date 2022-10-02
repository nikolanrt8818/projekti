import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import { TrendingCoins } from "../config/api";
import { FaThinkPeaks } from "react-icons/fa"

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { curr, symbol } = CryptoState();

  const fetchTrending = async () => {
    const { data } = await axios.get(TrendingCoins(curr));
    const coins = data;
    setTrending(coins);
  };

  const slide_one = useRef();
  const [activeOne, setActiveOne] = useState(1);
  const slide_two = useRef();
  const [activeTwo, setActiveTwo] = useState(0);

  const clickHandler = () => {
    if (activeOne === 1) {
      setActiveOne(0);
      setActiveTwo(1);
    } else {
      setActiveOne(1);
      setActiveTwo(0);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [trending]);

  return (
    <div className="container">
      <div className="carousel">
        <h3>
          Trending coins <span><FaThinkPeaks/></span>
        </h3>
        <button className="carousel__button prev" onClick={clickHandler}>
          &lsaquo;
        </button>
        <button className="carousel__button next" onClick={clickHandler}>
          &rsaquo;
        </button>
        <div ref={slide_one} className="cards" active={activeOne}>
          {trending.slice(0, 5).map((coin) => {
            return (
              <a
                key={coin.market_cap_rank}
                href={`/coin/${coin.id}`}
                className="cardLink"
              >
                <div className="card">
                  <div className="card__img">
                    <img src={coin.image} alt="coin_image" />
                  </div>
                  <div className="card__info">
                    <div>
                      <h4>{coin.name}</h4>
                      <span>{coin.symbol}</span>
                    </div>
                    <h4>
                      {symbol}
                      {coin.current_price}
                    </h4>
                    {coin.price_change_percentage_24h.toFixed(2) < 0 ? (
                      <small className="capChange down">
                        
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </small>
                    ) : (
                      <small className="capChange up">
                        
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </small>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div ref={slide_two} className="cards" active={activeTwo}>
          {trending.slice(5, 10).map((coin) => {
            return (
              <a
                key={coin.market_cap_rank}
                href={`/coin/${coin.id}`}
                className="cardLink"
              >
                <div className="card">
                  <div className="card__img">
                    <img src={coin.image} alt="coin_image" />
                  </div>
                  <div className="card__info">
                    <div>
                      <h4>{coin.name}</h4>
                      <span>{coin.symbol}</span>
                    </div>
                    <h4>
                      {symbol}
                      {coin.current_price}
                    </h4>
                    {coin.price_change_percentage_24h.toFixed(2) < 0 ? (
                      <small className="capChange down">
                        
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </small>
                    ) : (
                      <small className="capChange up">
                        
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </small>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="dashes">
          <span className="dash" active={activeOne} onClick={clickHandler}>
            &mdash;
          </span>
          <span className="dash" active={activeTwo} onClick={clickHandler}>
            &mdash;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
