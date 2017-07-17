import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

class SelectionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0, array: props.defaultArray};
    this.renderQueue = [];
    this.running = false;
  }

  processRenderQueue() {
    if (this.renderQueue.length > 0) {
      let array = this.renderQueue.shift();
      this.setState({step: this.state.step + 1, array: array});
      this.running = true;
    } else {
      this.running = false;
    }
  }

  componentDidMount() {
    this.sort(this.state.array, (array) => {
      let cloned = _.clone(array);
      this.renderQueue.push(cloned);

      if (!this.running) {
        this.processRenderQueue();
      }
    });
  }

  componentDidUpdate() {
    _.delay(this.processRenderQueue.bind(this), 30);
  }

  sort(array, callback) {
    for(let i = 0; i < array.length - 1; i++) {
      let minIndex = i;

      for(let j = i + 1; j < array.length; j++) {
        if(array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      const swap = array[i];
      array[i] = array[minIndex];
      array[minIndex] = swap;
      callback(array);
    }
  }

  render() {
    return (
      <div className="Sort SelectionSort">
        <h2>Selection</h2>
        <dl className="BarChart">
          {this.state.array.map((x, i) => {
            return <dd className="Bar" key={i} style={{height: x * 10}} />;
          })}
        </dl>
        <p>Step: {this.state.step}</p>
      </div>
    );
  }
}

export default SelectionSort;
