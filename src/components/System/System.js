import React, { Component } from "react";
import "./System.scss";
import Keyboard from "../../components/Keyboard/Keyboard";
import Monitor from "../../components/Monitor/Monitor";
import table from "../../HomeIllustration.svg";

export default class System extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.keyboardRef = React.createRef();
    this.onType = this.onType.bind(this);
  }

  setScreenText(text){
    this.setState({ screenText: text });
  }

  onType(event){
    this.keyboardRef.current.handleKeyDown(event);
  }

  render() {
    return (
      <div className="System">
        <Monitor screenText={this.state.screenText} onType={this.onType}/>
        <img src={table} className="table" alt="" />
        <Keyboard ref={this.keyboardRef} setScreenText={this.setScreenText.bind(this)}/>
      </div>
    );
  }
}
