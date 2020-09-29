import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'
import WordCloud from './WordCloud'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
          <Search />
        <img src={''} className="App-logo" alt="Discovery News" />
          <WordCloud />
      </header>
    </div>
  );
}

export default App;
