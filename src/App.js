import React, { Component } from "react";

import Header from "./components/Header";
import CarList from "./components/CarList";
import MapContainer from "./components/MapContainer";

const page = {
  display: "flex"
};

const carListContainer = {
  "flex-grow": 1,
  position: "relative",
  width: "325px"
};

const carListStyle = {
  "padding-left": "15px",
  "overflow-y": "auto",
  "overflow-x": "hidden",
  height: "660px"
};

const mapContainer = {
  "flex-grow": 2,
  position: "relative"
};

const mapSize = {
  width: "1215px"
};

class App extends Component {
  render() {
    return (
      <div style={page}>
        <div style={carListContainer}>
          <Header />
          <div style={carListStyle}>
            <CarList />
          </div>
        </div>
        <div style={mapContainer}>
          <div style={mapSize}>
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
