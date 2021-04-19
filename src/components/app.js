import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";
import Slider from "./slider.js";

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
    let n = this.state.size;
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * (300 - 5) + 6));
    }
    this.setState({ array: arr });
  };

  sizeChange =async (event) => {
      await this.setState({size:event.target.value});
      this.resetArray();
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
          insertion={this.insertionSort}
          bubble={this.bubbleSort}
          selection={this.selectionSort}
          merge={this.mergeSort}
          resetArray={this.resetArray}
        />
        <Slider sizeChange={this.sizeChange} />
      </div>
    );
  }
}
