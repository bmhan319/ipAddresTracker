import React from 'react'
import IpInput from './IpInput'
import Details from './Details'

export default function Header() {
  return (
    <div>
      <div className="head-container">
        <h1 className="head-title">IP Address Tracker</h1>
        <IpInput />
        <Details />
      </div>
    </div>
  )
}