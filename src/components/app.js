import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";
import BubbleSort from "./sortingAlgorithms/bubbleSort.js";

export default class App extends React.Component {
  state = { size: 220, array: [] };

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const n = this.state.size;
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * (n - 5) + 6));
    }
    this.setState({ array: arr });
  };
  sort = () => {
    this.setState({ array: BubbleSort(this.state.array) });
  };
  test = () => {
    let arr = this.state.array;
    if (
      arr.sort((a, b) => {
        return a - b;
      }) === BubbleSort(arr)
    ) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <div>
        <Bars count={this.state.size} array={this.state.array} />
        <br />
        <Navigation
          test={this.test}
          sort={this.sort}
          resetArray={this.resetArray}
        />
      </div>
    );
  }
}
