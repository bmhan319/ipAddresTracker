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
    city: 'Rosemead (Garvey)',
    region: 'California',
    postalCode: "91770",
    timeZone: "-08:00",
    isp: "Southern California Edison",
    lat: 34.0614,
    long: -118.08162,
    zoom: 13,
    searchValue: "",
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
    if (this.state.searchValue === "") {
      document.querySelector('.ip-form').classList.add('input-error')
    } else {
      document.querySelector('.ip-form').classList.remove('input-error')
      this.callApi(this.state.searchValue)
    }
  }

  callApi = async (ip) => {
    const url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}&ipAddress=${ip}`
    const call = await fetch(url)
    const data = await call.json()
    console.log(data)
    this.setState({
      ipAddress: this.state.searchValue,
      city: data.location.city,
      region: data.location.region,
      postalCode: data.location.postalCode,
      timeZone: data.location.timezone,
      isp: data.isp,
      lat: data.location.lat,
      long: data.location.lng,
      counter: data.location.geonameId
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