import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ quote, setQuote ] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [ isLoading, setLoading ] = useState(true);

  function getOneQuote(quotes = []) {
      const length = quotes.length;
      const randomNumber = Math.round(Math.random() * length);
      setCurrentQuote(quotes[randomNumber]);
  }

  useEffect(()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes')
    .then(res => res.json())
    .then(quotes => {
      setQuote(quotes);
      getOneQuote(quotes);
      setLoading(false);
     })
    .catch(err => console.log(err))
  },[])

  const getNewQuote = () => {
    getOneQuote(quote);
  }

  if(isLoading) return <h1>Loading...</h1> 

  return (
    <div className="wrapper">
      <div id="quote-box">
        <div>
          <h1 id="text">
            {currentQuote.text}
          </h1>
        </div>
        <div>
          <h3 id="author">
           - {
              currentQuote.author
            }
          </h3>
        </div>
        <div className="flex-apart">
          <div>
            {/* eslint-disable-next-line */}
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='${currentQuote.text}' - ${currentQuote.author}`} target="_blank" rel="noopener noreferrer" id="tweet-quote">
              Tweet
            </a>
          </div>
          <button
            type="button"
            onClick={getNewQuote}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
