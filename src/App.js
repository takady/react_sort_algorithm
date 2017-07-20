import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import QuickSort from './QuickSort';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sort Algorithm</h2>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <BubbleSort defaultArray={[8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12]} />
              </td>
              <td>
                <SelectionSort defaultArray={[8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12]} />
              </td>
            </tr>
            <tr>
              <td>
                <InsertionSort defaultArray={[8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12]} />
              </td>
              <td>
                <QuickSort defaultArray={[8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12]} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
