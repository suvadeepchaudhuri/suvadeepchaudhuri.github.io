import React, { Component } from "react";
import "./System.scss";
import Keyboard from "../../components/Keyboard/Keyboard";
import Monitor from "../../components/Monitor/Monitor";
import table from "../../HomeIllustrationExp.svg";

export default class System extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setScreenText(text){
    this.setState({ screenText: text });
  }


  render() {
    return (
      <div className="System">
        <Monitor screenText={this.state.screenText}/>
        {/* <img src={table} className="table" alt="" /> */}
        {/* <div className="desk"></div> */}
        <Keyboard setScreenText={this.setScreenText.bind(this)}/>
      </div>
    );
  }
}
