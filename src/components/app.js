import React from "react";
import Bars from "./bars.js";
import Navigation from "./navigation.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bars />
        <br />
        <Navigation />
      </div>
    );
  }
}
