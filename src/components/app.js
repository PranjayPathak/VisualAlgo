import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";
// import Slider from "./slider.js";

import InsertionSort from "./sortingAlgorithms/insertionSort.js";
import BubbleSort from "./sortingAlgorithms/bubbleSort.js";
import SelectionSort from "./sortingAlgorithms/selectionSort";
import MergeSort from "./sortingAlgorithms/mergeSort";

// import { animation_color, animation_height } from "./sortingAlgorithms/visualizer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 50,
      array: [],
      flag: true,
      timer:0
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

  sizeChange = async (event) => {
      await this.setState({size:event.target.value});
      this.resetArray();
  };
  
  animation_height = (i, height,tim) => {
    let bars = document.getElementsByClassName("bar");
    setTimeout(() => {
        bars[i].style.height = `${height}px`;
    },tim);
  };

  sorting_animation(srt_ar,ar){
    let tim=this.state.timer;
    for(let i=0; i < ar.length ;i++){
      this.animation_height(ar[i][0],ar[i][1],tim);
      tim += 2;
    }
    setTimeout(() => {
       this.setState({array:srt_ar}); 
     },tim);
  };

  insertionSort = () => {
    let [srt_ar,ar]=InsertionSort(this.state.array);
    this.sorting_animation(srt_ar,ar);
  };

  bubbleSort = () => {
    let [srt_ar,ar]=BubbleSort(this.state.array),tim=this.state.timer;
    this.sorting_animation(srt_ar,ar);
  };

  selectionSort = () => {
    let [srt_ar,ar]=SelectionSort(this.state.array);
    this.sorting_animation(srt_ar,ar);
    };

  mergeSort = () => {
    let [srt_ar,ar]=MergeSort(this.state.array, 0);
    this.sorting_animation(srt_ar,ar);
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

      <div>
           <input value={this.state.size} onChange={(event)=>this.sizeChange(event)} type="range" min="10" max="300" ></input>
      </div>
      {/* <button onClick={()=>{
               this.setState({flag:false});
               this.setState({timer:0});
               }}></button> */}
        {/* <Slider sizeChange={this.sizeChange} /> */}
      </div>
    );
  }
}
