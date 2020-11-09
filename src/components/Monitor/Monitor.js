import React, { Component } from "react";
import "./Monitor.scss";
import GlobalContext from "../../context-stores/global-store";

export default class Monitor extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

    this.state = {
      isMonitorOn: true
    };
  }

  componentDidMount() {
    console.log(this.context);
  }

  isMonitorOn = true;

  toggleMonitorPower() {
    this.setState({ isMonitorOn: !this.state.isMonitorOn });
    this.context.toggleTheme();
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
    if (this.state.isMonitorOn) {
      screenTextDisplay = (
        <span>
          <span ref="typingArea">
            <pre>{this.props.screenText}</pre>
          </span>
          <span className="cursorSpan">|</span>
        </span>
      );
    }
    return (
      <div className="monitor">
        Theme: {this.context.theme}
        <div className="monitor__bezel">
          <div className="display">{screenTextDisplay}</div>
        </div>
        <div className="monitor__bezel-bottom">
          <button
            className={
              "led " + (this.state.isMonitorOn ? "led__on" : "led__off")
            }
            onClick={this.toggleMonitorPower.bind(this)}
          />
        </div>
      </div>
    );
  }
}
