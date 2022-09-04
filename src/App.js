import React, { useState, useEffect } from "react";
import './index.css'


const App = () => {
  const [quotes, setQuotes] = useState([]);


  const getQuote = () => {
    fetch(`https://api.quotable.io/random`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };


  const { content, author } = quotes;
  return (
    <div className="box-center">
      <div className="text">
        <p className="text">{content}</p>
      </div>
      <div className="author">
        ~{author}

        <button onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default App;