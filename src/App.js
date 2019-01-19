import React, { Component } from "react";

import Header from "./components/Header";
import CarList from "./components/CarList";
import MapContainer from "./components/MapContainer";

const navbarFlex = {
  display: "flex"
};

const carListContainer = {
  "flex-grow": 1,
  position: "relative",
  top: "25px",
  left: "25px",
  width: "300px"
};

const mapContainer = {
  "flex-grow": 2,
  position: "relative",
  top: "25px",
  right: "25px"
};

const mapSize = {
  width: "1240px",
  height: "550px"
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={navbarFlex}>
          <div style={carListContainer}>
            <CarList />
          </div>
          <div style={mapContainer}>
            <div style={mapSize}>
              <MapContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
