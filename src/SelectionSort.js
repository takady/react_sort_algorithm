import classNames from 'classnames';
import React, { Component } from 'react';
import './App.css';

class SelectionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {cursor: 1, sortedIndex: 0, minIndex: 0, step: 0, array: props.defaultArray};
  }

  componentDidMount() {
    setInterval(() => {this.sort(this.state.array)}, 70);
  }

  sort(array) {
    if(this.state.sortedIndex >= this.state.array.length - 1)
      return;

    if(this.state.cursor === array.length) {
      const swap = array[this.state.sortedIndex];
      array[this.state.sortedIndex] = array[this.state.minIndex];
      array[this.state.minIndex] = swap;
      this.setState({
        sortedIndex: this.state.sortedIndex + 1,
        cursor: this.state.sortedIndex + 2,
        minIndex: this.state.sortedIndex + 1,
        array: array
      });
    } else {
      if(array[this.state.cursor] < array[this.state.minIndex]) {
        this.setState({minIndex: this.state.cursor});
      }
      this.setState({cursor: this.state.cursor + 1});
    }
    this.setState({step: this.state.step + 1});
  }

  render() {
    return (
      <div className="Sort SelectionSort">
        <h2>SelectionSort</h2>
        <dl className="BarChart">
          {this.state.array.map((x, i) => {
            return <dd className={classNames('Bar', {current: i === this.state.cursor})} key={i} style={{height: x * 10}} />;
          })}
        </dl>
        <p>Step: {this.state.step}</p>
      </div>
    );
  }
}

export default SelectionSort;
