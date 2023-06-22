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
    <>
   <div class="center-heading">
<h3>WELCOME TO QUOTE-WORLD</h3></div>
    <div className="box-center">
    <p className="quote-content">{content}</p>
    <span className="quote-author">~ {author}</span><br />
    <button className="new-quote-button" onClick={getNewQuote}>New Quote</button>
  </div>
  </>
  );
};

export default App;