import React from "react";
import "./bar.css";
export default class bar extends React.Component {
  render() {
    return (
      <div className="bar" style={{ height: `${this.props.height}px` }}></div>
    );
  }
}
