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
  width: "320px"
};

const carListSize = {
  width: "320px"
};

const carListStyle = {
  "padding-left": "15px"
};

const mapContainer = {
  "flex-grow": 2,
  position: "relative"
};

const mapSize = {
  width: "1220px",
  height: "723px"
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={navbarFlex}>
          <div style={carListContainer}>
            <div style={carListSize}>
              <Header />
              <div style={carListStyle}>
                <CarList />
              </div>
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
