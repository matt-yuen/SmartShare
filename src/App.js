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
  top: "10px",
  left: "10px",
  width: "300px"
};

const carListSize = {
  width: "265px"
};

const mapContainer = {
  "flex-grow": 2,
  position: "relative",
  top: "10px",
  right: "10px"
};

const mapSize = {
  width: "1240px",
  height: "635px"
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={navbarFlex}>
          <div style={carListContainer}>
            <div style={carListSize}>
              <CarList />
            </div>
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
