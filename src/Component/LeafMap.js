import React, { Component } from 'react'
import { MapContainer, TileLayer } from "react-leaflet";

class LeafMap extends Component {
  render() {
    let array = [this.props.state.lat, this.props.state.long]

    return (
      <div className="mapContainer">
        <MapContainer id="myMap" center={array} zoom={25}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    )
  }
}

export default LeafMap;