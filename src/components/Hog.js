import React from 'react';
import '../App.css';
import HogDetails from './HogDetails'

export default class Hog extends React.Component {

  constructor() {
    super()
    this.state = {
      showDetails: false
    }
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return (
      <div className="pigTile">
        <h3 className="pigTile">{this.props.hog["name"]}</h3>
        <img src={this.props.hog["image"]} alt="hog" />
        <button onClick={this.toggleDetails}>Hog Details</button>
        {this.state.showDetails && <HogDetails hog={this.props.hog} />}
      </div>
    ) 
  }
}