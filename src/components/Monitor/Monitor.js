import React, { Component } from "react";
import "./Monitor.scss";

export default class Monitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMonitorOn: true
    };
  }

  isMonitorOn = true;

  toggleMonitorPower() {
    this.setState({isMonitorOn: !this.state.isMonitorOn})
  }
  // componentDidMount() {
  // }

  // componentDidUpdate(prevProps) {
  // }

  // setTextOnMonitor() {
  //   if (this.refs["typingArea"]) {
  //     this.refs["typingArea"].innerHTML =
  //       "<pre>" + this.props.screenText + "</pre>";
  //   }
  // }

  render() {
    let screenTextDisplay;
    if(this.state.isMonitorOn){
      screenTextDisplay =  <span><span ref="typingArea">
      <pre>{this.props.screenText}</pre>
    </span>
    <span className="cursorSpan">|</span></span>;
    }
    return (
      <div className="monitor">
        <div className="monitor__bezel">
          <div className="display">
            {screenTextDisplay}
          </div>
        </div>
        <div className="monitor__bezel-bottom">
          <button
            className={"led " + (this.state.isMonitorOn ? "led__on" : "led__off")}
            onClick={this.toggleMonitorPower.bind(this)}
          />
        </div>
      </div>
    );
  }

}
