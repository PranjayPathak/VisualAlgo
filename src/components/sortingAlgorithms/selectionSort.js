import { animation_color, animation_height } from "./visualizer";

const Selection = (arr) => {
  let min_idx, c;
  for (let i = 0; i < arr.length - 1; i++) {
    min_idx = i;
    // animation_color(i, "purple");
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
        // animation_color(j, "red");
      } else {
        // animation_color(j, "green");
      }
    }

    if (min_idx !== i) {
      c = arr[i];
      animation_height(i, arr[min_idx]);
      animation_height(min_idx, c);
      arr[i] = arr[min_idx];
      arr[min_idx] = c;
      animation_color(i, "blue");
      animation_color(min_idx, "blue");
    }
  }
  console.log(arr);
  return arr;
};

export default Selection;
