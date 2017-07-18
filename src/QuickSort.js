import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

class QuickSort extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0, array: props.defaultArray};
    this.renderQueue = [];
    this.running = false;
    this.sort = this.sort.bind(this);
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
    if (array.length < 1) {
      return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for(let i = 1; i < array.length; i++) {
      if(array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    left = this.sort(left, callback);
    right = this.sort(right, callback);
    const middle = [pivot];
    array = left.concat(middle).concat(right);
    callback(array);
    return array;
  }

  render() {
    return (
      <div className="Sort QuickSort">
        <h2>QuickSort</h2>
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

export default QuickSort;
