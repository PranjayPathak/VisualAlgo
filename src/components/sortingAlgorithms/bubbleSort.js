const Bubble = (arr) => {
  let c = 0;
  const len = arr.length;
  //   let flag;
  for (let j = 1; j < len - 1; j++) {
    // flag = 0;
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        // flag = 1;
        c = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = c;
      }
      //   if (flag === 0) {
      //     break;
      //   }
    }
  }
  return arr;
};

export default Bubble;
