import React from 'react';
import '../App.css';

const HogDetails = (props) => {
    return <div>
        <div id="specialty">Specialty: {props.hog["specialty"]} </div>
        <div id="isGreased">
            Greased: {props.hog["greased"] ? "Heck Yeah" : "Nah Fam"}
        </div>
        <div id="medal">
            Highest Medal: {props.hog["highest medal achieved"]}
        </div>
        <div id="weight">
            Weight-to-Fridge Ratio: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
        </div>
    </div>;
}

export default HogDetails;