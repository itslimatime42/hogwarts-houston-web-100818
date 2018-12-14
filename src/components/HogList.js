import React, { Component } from 'react';
import '../App.css';

export default class HogList extends Component {

  render() {
    return (
      <div className="ui grid container">
          {this.props.hogs.map(hog => {
            return (
              <div className="ui eight wide column">
                <div className="pigTile">
                  <div className="image">
                    <img src={hog.image}/>
                  </div>
                  <div className="content">
                    <a className="header">{hog.name}</a>
                    <div className="meta">
                      <div className="specialty">Specialty: {hog['specialty']} </div>
                      <div className="isGreased">{hog['greased'] ? 'Greased' : 'Not Greased'} </div>
                      <div className="medal">Highest Medal: {hog['highest medal achieved']} </div>
                    </div>
                    <div className="description">
                      {hog.name} is an art director living in New York.
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="user icon"></i>
                      {hog.name} has 22 Friends
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
