import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectValue, setSelectValue] = useState("all");

  const fetchQuotes = async (val) => {
    if (val === "all") {
      const result = await axios(
        `https://goquotes-api.herokuapp.com/api/v1/random?count=1`
      );
      setQuotes(result.data.quotes);
    } else {
      const result = await axios(
        `https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=${selectValue}`
      );
      setQuotes(result.data.quotes);
    }
  };

  const addQuotes = async () => {
    const result = await axios(
      `https://goquotes-api.herokuapp.com/api/v1/all/tags`
    );
    setTags(result.data.tags);
  };

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleClick = () => {
    fetchQuotes(selectValue);
  };

  useEffect(() => {
    addQuotes();
  }, []);


  return (
    <div className="randomQuote">
      <h4>Random Quote</h4>
      <button onClick={handleClick}>Get</button>

      <div className="tags">
        <p>Choose quote tag:</p>
        <select onChange={handleChange}>
          <option value="all">all</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {quotes.map((quote, index) => (
        <div className="quote" key={index}>
          <q>{quote.text}</q>
          <p>- {quote.author}</p>
          <small>Tag: {quote.tag}</small>
        </div>
      ))}
    </div>
  );
};

export default RandomQuote;
