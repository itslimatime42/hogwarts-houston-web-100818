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

  hideHog = () => {
    this.props.hide(this.props.hog)
  }

  render() {
    return <div className="pigTile">
        <div>
          <h3 className="pigTile">{this.props.hog["name"]}</h3>
        </div>
        <div>
          <img src={this.props.hog["image"]} alt="hog" />
        </div>
        <div>
          <button onClick={this.toggleDetails}>Hog Details</button>
          <button onClick={this.hideHog}>Hide</button>
        </div>
        <div>
          {this.state.showDetails && <HogDetails hog={this.props.hog} />}
        </div>
      </div>; 
  }
}