import React, { Component } from "react";

// temp
const logo = require("../images/logo.png");

const temp = {
  width: "60px"
};

class CarListItem extends Component {
  render() {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={logo} />
            <div className="header">Model</div>
            <div className="meta">Make, Year</div>
            <div className="description">Extra info</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarListItem;
