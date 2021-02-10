let timer = 0;
let bars = document.getElementsByClassName("bar");
export const animation_color = (i, clr) => {
  setTimeout(() => {
    if (bars[i] != undefined) {
      bars[i].style.backgroundColor = clr;
    } else {
      console.log(i);
    }
  }, (timer += 0.1));
};

export const animation_height = (i, height) => {
  setTimeout(() => {
    if (bars[i] != undefined) {
      bars[i].style.height = `${height}px`;
    } else {
      console.log(i);
      console.log(bars[i]);
    }
  }, (timer += 2));
};
