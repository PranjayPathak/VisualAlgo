import React from "react";

export default class navigation extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.resetArray}>RANDOMIZE</button>
        <button onClick={this.props.bubble}>BUBBLE</button>
        <button onClick={this.props.insertion}>INSERTION</button>
        <button onClick={this.props.selection}>SELECTION</button>
        <button onClick={this.props.merge}>MERGE</button>      
      </div>
    );
  }
}
