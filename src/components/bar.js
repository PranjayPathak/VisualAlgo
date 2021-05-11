import React from "react";
export default class bar extends React.Component {
  render() {
    return (
      <div
        className={`bar bar${this.props.cls}`}
        style={{ height: `${this.props.height}px` }}
      ></div>
    );
  }
}
