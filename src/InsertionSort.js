import classNames from 'classnames';
import React, { Component } from 'react';
import './App.css';

class InsertionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {cursor: 1, sortedIndex: 1, step: 0, array: props.defaultArray};
  }

  componentDidMount() {
    setInterval(() => {this.sort(this.state.array)}, 70);
  }

  sort(array) {
    if(this.state.sortedIndex > this.state.array.length)
      return;

    if(array[this.state.cursor - 1] > array[this.state.cursor]) {
      const swap = array[this.state.cursor - 1];
      array[this.state.cursor - 1] = array[this.state.cursor];
      array[this.state.cursor] = swap;
      this.setState({array: array});
    } else {
      this.setState({cursor: this.state.sortedIndex + 1, sortedIndex: this.state.sortedIndex + 1})
    }

    if(this.state.cursor === 0) {
      this.setState({cursor: this.state.sortedIndex + 1, sortedIndex: this.state.sortedIndex + 1})
    } else {
      this.setState({cursor: this.state.cursor - 1});
    }
    this.setState({step: this.state.step + 1});
  }

  render() {
    return (
      <div className="Sort InsertionSort">
        <h2>InsertionSort</h2>
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

export default InsertionSort;
