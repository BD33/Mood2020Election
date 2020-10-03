import React from 'react';
import './App.css';
import Search from './Search'
import LineChart from './LineChart';
import WordCloud from './WordCloud'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
          <Search />
        <img src={''} className="App-logo" alt="Discovery News" />
          <LineChart />
          <WordCloud />
      </header>
    </div>
  );
}

export default App;
