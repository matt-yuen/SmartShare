import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const pos0 = { lat: 43.659833, lng: -79.390408 };
const pos1 = { lat: 43.654013, lng: -79.380186 };
const pos2 = { lat: 43.659161, lng: -79.38206 };
const pos3 = { lat: 43.641425, lng: -79.377036 };
const pos4 = { lat: 43.654191, lng: -79.383132 };

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 43.6546426,
          lng: -79.3898563
        }}
      >
        <Marker position={pos0} />
        <Marker position={pos1} />
        <Marker position={pos2} />
        <Marker position={pos3} />
        <Marker position={pos4} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA3X-16HuXy6I4ezW7mPCsAdkv2xuEvkTo"
})(MapContainer);

// export default MapContainer;
