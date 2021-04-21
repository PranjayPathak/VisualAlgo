//

// import { animation_color, animation_height } from "./visualizer";

const InsertionSort = (arr) => {
  let value, hole,anim_arr=[];
  for (let i = 1; i < arr.length; i++) {
    value = arr[i];
    hole = i;
    while (hole >= 0 && arr[hole - 1] > value) {
      anim_arr.push([hole, arr[hole - 1]]);
      // animation_height(hole, arr[hole - 1]);
      // animation_color(hole, "blue");
      arr[hole] = arr[hole - 1];
      hole = hole - 1;
    }
    anim_arr.push([hole, value]);
    // animation_height(hole, value);
    // animation_color(hole, "blue");
    arr[hole] = value;
  }
  return [arr,anim_arr];
};

export default InsertionSort;
