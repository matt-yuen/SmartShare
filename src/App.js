import React, { Component } from "react";

import Header from "./components/Header";
import CarList from "./components/CarList";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CarList />
        <Map />
      </div>
    );
  }
}

export default App;
