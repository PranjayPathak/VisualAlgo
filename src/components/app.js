import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";

import InsertionSort from "./sortingAlgorithms/insertionSort.js";
import BubbleSort from "./sortingAlgorithms/bubbleSort.js";
import SelectionSort from "./sortingAlgorithms/selectionSort";
import MergeSort from "./sortingAlgorithms/mergeSort";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 200,
      array: [],
    };
  }

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

  insertionSort = () => {
    InsertionSort(this.state.array);
  };
  bubbleSort = () => {
    BubbleSort(this.state.array);
  };
  selectionSort = () => {
    SelectionSort(this.state.array);
  };
  mergeSort = () => {
    MergeSort(this.state.array, 0);
  };

  testing = () => {
    let arr = this.state.array;
    let sort_arr = [...arr].sort((a, b) => {
      return a - b;
    });
    console.log(this.arr_compare(sort_arr, this.mergeSort(arr)));
  };
  arr_compare(arr, sort_arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== sort_arr[i]) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div>
        <Bars count={this.state.size} array={this.state.array} />
        <br />
        <Navigation
          test={this.testing}
          insertion={this.insertionSort}
          bubble={this.bubbleSort}
          selection={this.selectionSort}
          merge={this.mergeSort}
          resetArray={this.resetArray}
        />
      </div>
    );
  }
}
