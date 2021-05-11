import React from "react";
import Bar from "./bar.js";

export default class bars extends React.Component {
  render() {
    const graph = this.props.array.map((el, id) => {
      return <Bar cls={id} height={el} key={id} />;
    });
  
  
    return <div className="container_graph_bars">{graph}</div>;
  }
}