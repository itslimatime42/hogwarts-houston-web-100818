import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogGridContainer from '../containers/HogGridContainer'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      filtered: false,
      sorted: {
        isSorted: false,
        sortOn: ''
      }
    }
  }

  toggleFilter = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  }

  toggleSort = (sortCategory) => {
    this.setState({
      sorted: {
        isSorted: true,
        sortOn: sortCategory
      }
    })
  }
  
  render() {
    return (
      <div className="App">
          <Nav filtered={this.state.filtered} toggleFilter={this.toggleFilter} toggleSort={this.toggleSort} />
          <HogGridContainer filtered={this.state.filtered} sorted={this.state.sorted} />
      </div>
    )
  }
}

export default App;
