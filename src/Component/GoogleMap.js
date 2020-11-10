import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

function GoogleMap(props) {
    return (
      <div key={props.state.counter} className="mapContainer">
        <Map
          google={props.google}
          zoom={14}
          initialCenter={ {lat: props.state.lat, lng: props.state.long} }
        />
      </div>
    )
}

export default GoogleApiWrapper( {apiKey: process.env.GOOGLE_MAPS_KEY} )(GoogleMap);