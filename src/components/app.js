import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";
import BubbleSort from "./sortingAlgorithms/bubbleSort.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300,
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
  // insertionSort=()={

  // }
  bubbleSort = () => {
    // BubbleSort([44, 66, 33, 88, 22, 44, 99, 55, 78, 44, 359]);
    BubbleSort(this.state.array);
    // const bars = document.querySelectorAll(".bar");

    // console.log(bars);
    // console.log(animation);
    // // let timer = 10;
    // for (let i = 0; i < animation.length; i++) {
    //   let first = bars[animation[i][0]];

    //   let second = bars[animation[i][0] + 1];

    //   setTimeout(() => {
    //     first.style.backgroundColor = "red";
    //     second.style.backgroundColor = "red";
    //   }, i * 10 + 100);
    //   setTimeout(() => {
    //     if (animation[i][1]) {
    //       first.style.height = `${animation[i][1][0]}px`;
    //       second.style.height = `${animation[i][1][1]}px`;

    //       first.style.backgroundColor = "green";
    //       second.style.backgroundColor = "green";
    //     } else {
    //       first.style.backgroundColor = "green";
    //       second.style.backgroundColor = "green";
    //     }
    //   }, i * 10 + 200);
    // }
  };

  testing = () => {
    let arr = this.state.array;
    let sort_arr = [...arr].sort((a, b) => {
      return a - b;
    });
    console.log(this.arr_compare(sort_arr, BubbleSort(arr)));
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
          sort={this.bubbleSort}
          resetArray={this.resetArray}
        />
      </div>
    );
  }
}
