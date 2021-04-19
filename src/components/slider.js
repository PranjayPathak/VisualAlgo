import React from "react";

export default class slider extends React.Component {
  
  render() {
    return (
      <div>
           <input onChange={(event)=>this.props.sizeChange(event)} type="range" min="10" max="300" ></input>
      </div>
      
    );
  }
}


