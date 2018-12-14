import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogGridContainer from '../containers/HogGridContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <HogGridContainer />
      </div>
    )
  }
}

export default App;
