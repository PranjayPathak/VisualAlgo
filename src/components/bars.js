import React from "react";
import Bar from "./bar.js";

export default class bars extends React.Component {
  // state = { array: , size: 300 };
  render() {
    const graph = this.props.array.map((el, id) => {
      return <Bar height={el} key={id} />;
    });
    return <div>{graph}</div>;
  }
}
