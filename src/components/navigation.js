import React from "react";

export default class navigation extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.resetArray}>RANDOMIZE</button>
        <button onClick={this.props.sort}>BUBBLE</button>
        <button onClick={this.props.test}>CHECK</button>
      </div>
    );
  }
}
