import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: 43.6596426,
          lng: -79.3998563
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA3X-16HuXy6I4ezW7mPCsAdkv2xuEvkTo"
})(MapContainer);

// export default MapContainer;
