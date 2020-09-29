import React from 'react';
import './App.css';
import Search from './Search'
import WordCloud from './WordCloud'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
          <Search />
          <WordCloud />
      </header>
    </div>
  );
}

export default App;
