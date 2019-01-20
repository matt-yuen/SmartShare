import React, { Component } from "react";

// temp
const logo = require("../images/logo.png");

const temp = {
  "background-color": "#EFEEEE"
};

class CarListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui cards">
        <div className="card" style={temp}>
          <div className="content">
            <img className="right floated mini ui image" src={logo} />
            <div className="header">{this.props.model}</div>
            <div className="meta">
              {this.props.make}, {this.props.year}
            </div>
            <div className="description">{this.props.extra}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarListItem;
