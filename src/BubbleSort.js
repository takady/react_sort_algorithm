import classNames from 'classnames';
import React, { Component } from 'react';
import './App.css';

class BubbleSort extends Component {
  constructor(props) {
    super(props);
    this.state = {cursor: props.defaultArray.length, sortedIndex: 0, step: 0, array: props.defaultArray};
  }

  componentDidMount() {
    setInterval(() => {this.bubbleSort(this.state.array)}, 70);
  }

  bubbleSort(array) {
    if(this.state.sortedIndex >= this.state.array.length)
      return;

    if(this.state.cursor > this.state.sortedIndex) {
      if(array[this.state.cursor - 1] > array[this.state.cursor]) {
        const swap = array[this.state.cursor - 1];
        array[this.state.cursor - 1] = array[this.state.cursor];
        array[this.state.cursor] = swap;
      }

      console.debug(`sortedIndex: ${this.state.sortedIndex}, cursor: ${this.state.cursor}`);

      if(this.state.cursor - 1 === this.state.sortedIndex) {
        this.setState({cursor: this.state.array.length, sortedIndex: this.state.sortedIndex + 1});
      } else {
        this.setState({cursor: this.state.cursor - 1, array: array});
      }
      this.setState({step: this.state.step + 1});
    }
  }

  render() {
    return (
      <div className="Sort BubbleSort">
        <dl className="BarChart">
          {this.state.array.map((x, i) => {
            return <dd className={classNames('Bar', {current: i === this.state.cursor})} key={i} style={{height: x * 10}} />;
          })}
        </dl>
        <p>{this.state.step}</p>
      </div>
    );
  }
}

export default BubbleSort;
