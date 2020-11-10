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
    lat: 45.4,
    long: -75.7,
    zoom: 20,
    searchValue: undefined
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
      lat: 37.40599,
      long: -122.078514,
      zoom: 25
    })
    console.log(this.state.lat)
    console.log(this.state.searchValue)
  }

  componentDidMount() {
    console.log('componentDidMount', this.state.lat)
    console.log('componentDidMount',this.state.searchValue)
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