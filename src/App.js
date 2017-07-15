import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleSort from './BubbleSort.js';

class App extends Component {
  render() {
    const defaultArray = [8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sort Algorithm</h2>
        </div>
        <BubbleSort defaultArray={defaultArray} />
      </div>
    );
  }
}

export default App;
