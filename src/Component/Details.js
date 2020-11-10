import React from 'react'

export default function Details(props) {
  return (
    <div className="details-container">
      <div className="details-inner-container">
        <div className="details-data-container details-ip-container">
          <p className="details-title details-ip-title">IP ADDRESS</p>
          <h3 className="details-data details-ip-data">{props.state.ipAddress}</h3>
        </div>

        <div className="details-data-container details-location-container">
          <p className="details-title details-location-title">LOCATION</p>
          <h3 className="details-data details-location-data">{props.state.city}, <br/>{props.state.region} {props.state.postalCode}</h3>
        </div>

        <div className="details-data-container details-timezone-container">
          <p className="details-title details-timezone-title">TIMEZONE</p>
          <h3 className="details-data details-timezone-data">UTC{props.state.timeZone}</h3>
        </div>

        <div className="details-data-container details-isp-container">
          <p className="details-title details-isp-title">ISP</p>
          <h3 className="details-data details-isp-data">{props.state.isp}</h3>
        </div>
      </div>
    </div>
  )
}