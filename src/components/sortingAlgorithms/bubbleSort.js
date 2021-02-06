//
import { animation_color, animation_height } from "./visualizer";

const Bubble = (arr) => {
  let c, flag;
  const len = arr.length;
  for (let j = 0; j < len - 1; j++) {
    flag = 0;
    for (let i = 0; i < len - j - 1; i++) {
      animation_color(i, "yellow");
      animation_color(i + 1, "orange");

      if (arr[i] > arr[i + 1]) {
        c = arr[i];

        animation_color(i, "red");

        animation_height(i, arr[i + 1]);
        animation_color(i + 1, "red");
        animation_height(i + 1, arr[i]);
        arr[i] = arr[i + 1];
        arr[i + 1] = c;
        flag = 1;
      }
      animation_color(i, "blue");
      animation_color(i + 1, "blue");
    }

    if (flag !== 1) {
      break;
    }
  }
  return arr;
};

export default Bubble;
