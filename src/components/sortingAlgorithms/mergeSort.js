import { animation_color, animation_height } from "./visualizer";

const merge = (a, b, start) => {
  let i = 0,
    j = 0,
    k = 0;
  let ar = new Array(a.length + b.length);
  //   console.log(i, j, k);
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      ar[k] = a[i];
      animation_height(start + k, a[i]);
      i++;
    } else {
      ar[k] = b[j];
      animation_height(start + k, b[j]);
      j++;
    }
    k++;
  }
  while (i < a.length) {
    ar[k] = a[i];

    // ar[k++] = a[i++];
    animation_height(start + k, a[i]);
    k += 1;
    i += 1;
  }

  while (j < b.length) {
    ar[k] = b[j];
    // ar[k++] = b[j++];
    animation_height(start + k, b[j]);
    k += 1;
    j += 1;
  }

  return ar;
};

const MergeSort = (arr, start) => {
  let len = arr.length;

  if (len < 2) return arr;

  let mid = Math.floor(len / 2);
  let left = MergeSort(arr.slice(0, mid), start);

  let right = MergeSort(arr.slice(mid, len), start + mid);
  return merge(left, right, start);
};
export default MergeSort;
