import React, { Component } from 'react'
import { MapContainer, TileLayer } from "react-leaflet";

class LeafMap extends Component {
  componentDidMount() {
    let position = [this.props.state.lat, this.props.state.long]
    document.getElementById('myMap').removeAttribute('center', position)
    document.getElementById('myMap').setAttribute('center', position)
  }

  render() {
    let position = [this.props.state.lat, this.props.state.long]
    return (
      <div className="mapContainer">
        <MapContainer id="myMap" center={position} zoom={this.props.state.zoom} scrollWheelZoom={false}>
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