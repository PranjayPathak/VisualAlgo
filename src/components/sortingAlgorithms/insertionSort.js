//

import { animation_color, animation_height } from "./visualizer";

export default InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    console.log(hole > 0 && arr[hole] - 1 > value);
    value = arr[i];
    hole = i;

    while (hole >= 0 && arr[hole - 1] > value) {
      console.log("in while");
      arr[hole] = arr[hole - 1];
      hole = hole - 1;
    }
    arr[hole] = value;
  }
  console.log(arr);
};
