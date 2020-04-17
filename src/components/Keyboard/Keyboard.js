import React, { Component } from 'react';
import "./Keyboard.scss";
import KeyboardResource from './Keyboard_pa.svg';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class Keyboard extends Component {
constructor(props) {
    super(props)

    this.state = {
         word: "Hello"
    }
}

backlitColorCode = "#39FF96";

componentDidMount (){
    // Get the Object by ID
    const a = $("#keyboardObject");
    console.log(a[0]);
    // Get the SVG document inside the Object tag
    const svgDoc = a.children();
    console.log(svgDoc);
    // Get one of the SVG items by ID;
    let svgItem = svgDoc.find('svg#Keyboard#Row3#button-29');
    console.log(svgItem);
    // .find('Keyboard').find('Row3').find('button-29');
    svgItem.click(()=>{
        alert("caps");
        svgItem.setAttribute("fill", this.backlitColorCode);
    });
    $("#textX").click(function() {
        alert("textX");
        $("textX").toggleClass("backlit");
    });
    // var a = this.getElementById("keyboardObject");
	// // Get the SVG document inside the Object tag
	// var svgDoc = a.contentDocument;
	// // Get one of the SVG items by ID;
    // var svgItem = svgDoc.getElementsByTagName("SVG")[0];
    // var svgItem2 = svgItem.getElementById("Keyboard");
	// // Set the colour to something else
	// svgItem2.setAttribute("fill", "lime");
}

    render() {
        return (
            <div className="keyboard">
                <div id="textX">PG</div>
               <object id="keyboardObject" aria-label="Keyboard" type="image/svg+xml" data={KeyboardResource}></object>
            </div>
        )
    }
}
