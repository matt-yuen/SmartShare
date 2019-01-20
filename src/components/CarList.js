import React, { Component } from "react";
import { connect } from "react-redux";

import CarListItem from "./CarListItem";
import * as actions from "../actions";

const heading = {
  "padding-bottom": "5px",
  "padding-top": "5px"
};

class CarList extends Component {
  renderCarList() {
    return this.props.cars.map(car => {
      return (
        <CarListItem
          model={car.model}
          make={car.make}
          year={car.year}
          extra={car.extra}
        />
      );
    });
  }

  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    return (
      <div>
        <h3 style={heading}>Cars in your area</h3>
        <div>{this.renderCarList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(
  mapStateToProps,
  actions
)(CarList);
