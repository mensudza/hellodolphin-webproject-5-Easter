import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import './index.css';
import Navbar from './Components/navbar'
import Home from './Components/pages/home'
import About from './Components/pages/about'
import History from './Components/pages/history'
import Symbol from './Components/pages/symbol'
import Activity from './Components/pages/activity'
import Organizer from './Components/pages/organizer'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <About />
        <History />
        <Symbol />
        <Activity />
        <Organizer />
      </React.Fragment>
    )
  }
}