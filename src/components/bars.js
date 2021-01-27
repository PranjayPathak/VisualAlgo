import React from "react";
import Bar from "./bar.js";

export default class bars extends React.Component {
  state = { array: [], size: 300 };

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const n = this.state.size;
    let arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * (n - 5) + 6));
    }
    this.setState({ array: arr });
  }

  render() {
    const graph = this.state.array.map((el, id) => {
      return <Bar height={el} key={id} />;
    });
    return <div>{graph}</div>;
  }
}
