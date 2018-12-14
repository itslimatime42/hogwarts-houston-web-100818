import React, { Component } from 'react';
import '../App.css';
import HogList from '../components/HogList'

export default class HogListContainer extends Component {

  constructor() {
    super()
    this.state = {
      hogs: []
    }
  }

  getHogs = () => {
    fetch("http://localhost:3001/hogs")
    .then(resp => resp.json())
    .then(hogs => {
      this.setState({
        hogs: hogs
      })
    })
  }  

  render() {
    return <div>
        <button onClick={this.getHogs}>Get Hogs</button>
        <div className="ui grid container">
          <HogList hogs={this.state.hogs} />
        </div>
      </div>;
  }
}
