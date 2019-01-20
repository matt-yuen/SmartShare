import React, { Component } from "react";
import { connect } from "react-redux";

import CarListItem from "./CarListItem";

const heading = {
  "padding-bottom": "5px",
  "padding-top": "5px"
};

class CarList extends Component {
  renderCarList() {}

  render() {
    return (
      <div>
        <h3 style={heading}>Cars in your area</h3>
        <CarListItem />
      </div>
    );
  }
}

export default connect()(CarList);
