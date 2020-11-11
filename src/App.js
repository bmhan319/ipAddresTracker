import React, { Component } from 'react'
import Header from './Component/Header'
import LeafMap from './Component/LeafMap'
import './css/header.css'
import './css/ip-input.css'
import './css/details.css'
import './css/leafmap.css'


class App extends Component {
  state = {
    ipAddress: '',
    city: '',
    region: '',
    postalCode: "",
    timeZone: "",
    isp: "",
    lat: "",
    long: "",
    zoom: 13,
    searchValue: "",
    counter: 0  //Counter is needed to add a changing key in the mapContainer in order to have component remount with each state change.
  }

  //Puts user input into the state
  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      searchValue: e.target.value
    })
  }

  //Handles data on hitting submit button
  //Calls API function
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchValue === "") {
      document.querySelector('.ip-form').classList.add('input-error')
    } else {
      document.querySelector('.ip-form').classList.remove('input-error')
      this.callApi(this.state.searchValue)
    }
  }

  //Calls GeoLocation API and populates State with returned data
  callApi = async (ip) => {
    const url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}&ipAddress=${ip}`
    const call = await fetch(url)
    const data = await call.json()
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

  //LifeCycle method call function on page load
  componentDidMount () {
    window.addEventListener('load', this.onLoad)
  }

  //This call Ipapi API on initial page load to populate users location data on page
  onLoad = async () => {
    const ip = 'https://ipapi.co/json/'
    const call = await fetch(ip)
    const data = await call.json()
    this.setState({
      ipAddress: data.ip,
      city: data.city,
      region: data.region,
      postalCode: data.postal,
      timeZone: data.utc_offset,
      isp: data.org,
      lat: data.latitude,
      long: data.longitude,
      counter: data.country_area
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