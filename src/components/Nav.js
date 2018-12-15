import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	handleClick = (e) => {
		e.persist()
		switch (e.target.id) {
			case "greasedFilter":
				this.props.toggleFilter()
				break
			case "nameSort":
				this.props.toggleSort("name")
				break
			case "weightSort":
				this.props.toggleSort("weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water");
				break
		}
	}

	render(){
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<div>
					<button id="greasedFilter" onClick={this.handleClick} >{!this.props.filtered ? 'Filter Out Ungreased Hogs' : 'Remove Greased Filter'}</button>
					<button id="nameSort" onClick={this.handleClick} >Sort Hogs by Name</button>
					<button id="weightSort" onClick={this.handleClick} >Sort Hogs by Weight (Ascending)</button>
				</div>
			</div>
		)
	}
}

export default Nav
