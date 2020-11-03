import React, { Component } from 'react'
import Header from './Component/Header'
import LeafMap from './Component/LeafMap'
import './css/header.css'
import './css/ip-input.css'
import './css/details.css'
import './css/leafmap.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeafMap />
      </div> 
    )
  }
}

export default App;
