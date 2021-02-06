let timer = 0;
let bars = document.getElementsByClassName("bar");
export const animation_color = (i, clr) => {
  setTimeout(() => {
    bars[i].style.backgroundColor = clr;
  }, (timer += 0.1));
};

export const animation_height = (i, height) => {
  setTimeout(() => {
    bars[i].style.height = `${height}px`;
  }, (timer += 0.2));
};

// const animation = ()={

// }
