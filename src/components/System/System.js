import React, { Component } from "react";
import "./System.scss";
import Keyboard from "../../components/Keyboard/Keyboard";
import Monitor from "../../components/Monitor/Monitor";

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
        <Keyboard setScreenText={this.setScreenText.bind(this)}/>
      </div>
    );
  }
}
