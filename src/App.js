import React from 'react';
import './App.css';
import QuoteGen from './components/quote-generator';

const App = ()=>{
  return(
    <div className="App">
      <h1>
        <QuoteGen />
      </h1>
    </div>
  )
}

export default App;