import React from "react";
import Bars from "./components/bars.js";
import "./app.scss";

import InsertionSort from "./components/sortingAlgorithms/insertionSort.js";
import BubbleSort from "./components/sortingAlgorithms/bubbleSort.js";
import SelectionSort from "./components/sortingAlgorithms/selectionSort";
import MergeSort from "./components/sortingAlgorithms/mergeSort";



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
      arr.push(Math.floor(Math.random() * (600 - 50) + 6));
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
      <div className="container">
        <div className="container_navigation">
        <h2 className="logo">Visual Algo</h2>
           <button className="nav_button" onClick={this.resetArray}>RANDOMIZE</button>
           <button className="nav_button" onClick={this.bubbleSort}>BUBBLE</button>
           <button className="nav_button" onClick={this.insertionSort}>INSERTION</button>
           <button className="nav_button" onClick={this.selectionSort}>SELECTION</button>
           <button className="nav_button" onClick={this.mergeSort}>MERGE</button>              
    
        <div className="navigation_range">
            <input className="range_height" 
              value={this.state.size} 
              onChange={(event)=>this.sizeChange(event)} 
              type="range" min="10" max="420" 
            ></input>
     
            <br/>
    
            {/* <input className="range_speed" 
              value={this.state.size}  
              onChange={(event)=>this.sizeChange(event)} 
              type="range" min="10" max="420" 
            ></input> */}
        </div>

        </div>
        
        <div className="container_graph">
        <Bars count={this.state.size} array={this.state.array} />
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
