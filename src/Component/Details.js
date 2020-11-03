import React from 'react'

export default function Details() {
  return (
    <div className="details-container">
      <div className="details-inner-container">
        <div className="details-data-container details-ip-container">
          <p className="details-title details-ip-title">IP ADDRESS</p>
          <h3 className="details-data details-ip-data">192.212.174.101</h3>
        </div>

        <div className="details-data-container details-location-container">
          <p className="details-title details-location-title">LOCATION</p>
          <h3 className="details-data details-location-data">Brooklyn, NY 10001</h3>
        </div>

        <div className="details-data-container details-timezone-container">
          <p className="details-title details-timezone-title">TIMEZONE</p>
          <h3 className="details-data details-timezone-data">UTC-05:00</h3>
        </div>

        <div className="details-data-container details-isp-container">
          <p className="details-title details-isp-title">ISP</p>
          <h3 className="details-data details-isp-data">SpaceX Starlink</h3>
        </div>
      </div>
    </div>
  )
}