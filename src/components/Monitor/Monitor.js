import React, { Component } from "react";
import "./Monitor.scss";
import GlobalContext from "../../context-stores/global-store";

export default class Monitor extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

    this.state = {
      isMonitorOn: true,
    };
  }

  toggleMonitorPower() {
    this.setState({ isMonitorOn: !this.state.isMonitorOn });
    this.context.toggleTheme();
  }

  render() {
    let screenTextDisplay;
    if (this.state.isMonitorOn) {
      screenTextDisplay = (
        <>
          <div id="os-typing-area" className="typing-area">
            <pre>{this.props.screenText}_</pre>
          </div>
        </>
      );
    }
    return (
      <div className="monitor">
        <div className="monitor__bezel">
          <div
            className="display"
            tabIndex="0"
            onKeyDown={(event) => {
              event.preventDefault();
              event.persist();
              this.props.onType(event);
              var element = document.getElementById("os-typing-area");
              element.scrollTop = element.scrollHeight;
            }}
          >
            {screenTextDisplay}
          </div>
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
