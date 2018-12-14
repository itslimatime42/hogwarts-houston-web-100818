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

  componentDidMount() {
    this.getHogs()
  }

  render() {
    return <HogGrid hogs={this.state.hogs} />
  }
}
