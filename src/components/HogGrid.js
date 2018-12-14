import React from 'react';
import '../App.css';
import Hog from './Hog'

const HogGrid = (props) => {
  return(
    <div className="ui grid container">
      {props.hogs.map(hog => {
        return (
          <div key={hog.id} className="ui eight wide column">
            <Hog hog={hog} />
          </div>
        )
      })}
    </div>
  )
}

export default HogGrid;