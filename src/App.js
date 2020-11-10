import React, { Component } from 'react'
import Header from './Component/Header'
import LeafMap from './Component/LeafMap'
import './css/header.css'
import './css/ip-input.css'
import './css/details.css'
import './css/leafmap.css'


class App extends Component {
  state = {
    ipAddress: '192.212.174.101',
    city: 'Brooklyn',
    region: 'NY',
    postalCode: 10001,
    timeZone: '-05:00',
    isp: 'SpaceX Starlink',
    lat: 40.650002,
    long: -73.949997,
    zoom: 13,
    searchValue: undefined,
    counter: 0
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      ipAddress: '8.8.8.8',
      city: 'Mountain View',
      region: 'California',
      postalCode: 94043,
      timeZone: '-07:00',
      isp: 'Google LLC',
      lat: 37.386051,
      long: -122.083855,
      counter: this.counter++
    })
  }

  render() {
    return (
      <div className="App">
        <Header state={this.state} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <LeafMap state={this.state} />
      </div> 
    )
  }
}

export default App;