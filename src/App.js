import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import QuickSort from './QuickSort';

class App extends Component {
  render() {
    const array = [8, 20, 19, 14, 13, 6, 9, 5, 7, 16, 2, 4, 3, 10, 1, 17, 11, 18, 15, 12];

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
                <BubbleSort defaultArray={_.clone(array)} />
              </td>
              <td>
                <SelectionSort defaultArray={_.clone(array)} />
              </td>
            </tr>
            <tr>
              <td>
                <InsertionSort defaultArray={_.clone(array)} />
              </td>
              <td>
                <QuickSort defaultArray={_.clone(array)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
