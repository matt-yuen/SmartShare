import React, { Component } from "react";

import CarListItem from "./CarListItem";

class CarList extends Component {
  renderCarList() {}

  render() {
    return (
      <div>
        <h3>Cars in your area</h3>
        <CarListItem />
      </div>
    );
  }
}

export default CarList;
