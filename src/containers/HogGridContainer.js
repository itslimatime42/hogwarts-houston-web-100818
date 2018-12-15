import React from 'react';
import HogGrid from '../components/HogGrid'

export default class HogListContainer extends React.Component {

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

  hideHog = (hogToHide) => {
    this.setState({
      hogs: this.state.hogs.filter(hog => {
        return hog !== hogToHide
      })
    })
  }

  filterGreased = (hogs) => {
    if (this.props.filtered) {
      return hogs.filter(hog => {
        return hog.greased
      })
    } else {
      return hogs
    }
  }

  sortOn = (category, hogs) => {
    if (this.props.sorted.isSorted) {
      return hogs.sort(function(a, b) {
        if (a[category] < b[category]) {
          return -1
        } else if (a[category] > b[category]) {
          return 1
        } else {
          return 0
        }
      })
    } else {
      return hogs
    }
  }

  filterAndSort = (hogs) => {
    hogs = this.filterGreased(hogs)
    hogs = this.sortOn(this.props.sorted.sortOn, hogs)
    return hogs
  }

  componentDidMount() {
    this.getHogs()
  }

  render() {
    return <HogGrid hogs={this.filterAndSort(this.state.hogs)} hide={this.hideHog} />
  }
}
