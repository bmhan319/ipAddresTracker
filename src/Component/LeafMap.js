import React, { Component } from 'react'
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

class LeafMap extends Component {
  render() {
    let position = [this.props.state.lat, this.props.state.long]
    return (
      <div key={this.props.state.counter} className="mapContainer">
        <MapContainer id="myMap" 
                      center={position} 
                      zoom={this.props.state.zoom} 
                      zoomControl={false}
                      minZoom={3}
                      maxZoom={18}
                      scrollWheelZoom={false}>
          <ZoomControl position="bottomright" />
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