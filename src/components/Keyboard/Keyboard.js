import React, { Component } from "react";
import "./Keyboard.scss";
import { specialCharReferenceMap } from "./KeyMapping";
import $ from "jquery";
import { findDOMNode } from "react-dom";

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      word: "Hello",
    };
    this.initializeSpecialCharacterReferenceMap();
  }

  componentDidMount() {
    // this.typeWelcomeMessage();
    // this.greetUser();
  }

  initializeSpecialCharacterReferenceMap() {
    this.specialCharacterReferenceMap = new Map();
    let _this = this;
    specialCharReferenceMap.map((item) =>
      _this.specialCharacterReferenceMap.set(item.char, item.ref)
    );
  }

  greetUser() {
    let welcomeString = "Hello Clara welcome to geek mountain!";
    var alpha = /^[a-zA-Z]+$/;
    [...welcomeString].reduce((initialPromise, char) => {
      if (char.match(alpha) && char.toUpperCase() === char) {
        return initialPromise
          .then(() => {
            return this.resolveAfterTimeout("shift", 100);
          })
          .then(() => {
            return this.resolveAfterTimeout(char, 200);
          });
      }
      return initialPromise.then(() => {
        return this.resolveAfterTimeout(char, 200);
      });
    }, Promise.resolve());
  }

  async typeWelcomeMessage() {
    let welcomeString = "Hello User welcome to geek mountain!";
    let _this = this;
    var alpha = /^[a-zA-Z]+$/;
    for (let i = 0; i < welcomeString.length; i++) {
      let currentChar = welcomeString.charAt(i);
      if (
        currentChar.match(alpha) &&
        currentChar.toUpperCase() === currentChar
      ) {
        await this.resolveAfterTimeout("shift");
        await this.resolveAfterTimeout(currentChar.toLowerCase());
      } else {
        await this.resolveAfterTimeout(currentChar.toLowerCase());
      }
    }
  }

  resolveAfterTimeout(char, timeout = 200) {
    var alphanumeric = /^[0-9a-zA-Z]+$/;
    let ref = "";
    if (!char.match(alphanumeric)) {
      ref = this.specialCharacterReferenceMap.has(char)
        ? this.specialCharacterReferenceMap.get(char)
        : null;
      char = char === " " ? "space" : char;
    } else {
      ref = "button_" + char.toLowerCase();
    }

    if (ref) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.keyPressAction(ref, char);
          resolve();
        }, timeout);
      });
    }
    return new Promise.resolve();
  }

  backlitColor = "#39FF96";
  typedText = "";
  keyboardBackgroundColor = "#fff";
  keyBackgroundColor = "#fff";
  keyTextColor = "#707070";
  keyBorderColor = "#707070";
  keyBorderStrokeWidth = "3";
  keyboardFrameInnerBorderColor = "#707070";
  keyboardFrameInnerInsetColor = "#b2b0b0";
  keyboardFrameOuterBorderColor = "";
  keyboardFrameOuterInsetColor = "#707070";
  specialCharacterReferenceMap = null;
  isShiftEnabled = false;
  shiftKeyRef = "button_shift";
  isCapsEnabled = false;
  capsKeyRef = "button_caps";

  executeKeyboardLightEffect(context, value) {
    console.log(this.refs[context]);
    // if (value === "1 !") {
    //   let _this = this;
    //   let i = 1;
    //   let lightupKeys = [];
    //   while (i < 10) {
    //     let contextVal = "button_" + i;
    //     lightupKeys.push(_this.refs[contextVal]);
    //     // setTimeout(() => {
    //     //   _this.flashKey(_this.refs[contextVal], 100);
    //     // }, 300);
    //     i++;
    //   }
    //   this.execSequentially(lightupKeys, (item) =>
    //     setTimeout(() => {
    //       this.flashKey(item);
    //     }, 500)
    //   );
    // }
  }

  flashKey(key, time = 100) {
    if (key) {
      key.setAttribute("fill", this.backlitColor);
      setTimeout(() => {
        key.setAttribute("fill", this.keyBackgroundColor);
      }, time);
    }
  }

  activateKey(key){
    if (key) {
      key.setAttribute("fill", this.backlitColor);
    }
  }

  deActivateKey(key){
    if (key) {
      key.setAttribute("fill", this.keyBackgroundColor);
    }
  }

  /**
   * Function to execute actions based on the key that was pressed on the SVG OSK.
   *
   * @private
   * @function
   * @param {string} context
   * @param {string} value
   */
  keyPressAction(context, value) {
    value = value.trim().toLowerCase();
    this.executeKeyboardLightEffect(context, value);
    switch (value) {
      case "caps":
        if (this.isCapsEnabled) {
          this.isCapsEnabled = false;
          this.deActivateKey(this.capsKeyRef);
        } else {
          this.isCapsEnabled = true;
          this.capsKeyRef = this.refs[context];
          this.activateKey(this.capsKeyRef);
        }
        break;
      case "del":
        if (this.typedText.length > 0) {
          this.typedText = this.typedText.slice(0, this.typedText.length - 1);
        }
        this.flashKey(this.refs[context]);
        break;
      case "enter":
        this.typedText += "\n";
        this.flashKey(this.refs[context]);
        break;
      case "shift":
        if (this.isShiftEnabled) {
          this.isShiftEnabled = false;
          this.deActivateKey(this.shiftKeyRef);
        } else {
          this.isShiftEnabled = true;
          this.shiftKeyRef = this.refs[context];
          this.activateKey(this.shiftKeyRef);
        }
        break;
      case "space":
        this.typedText += " ";
        this.flashKey(this.refs[context]);
        break;
      case "tab":
        this.typedText += "\t";
        this.flashKey(this.refs[context]);
        break;
      case "ctrl":
        // do nothing
        this.flashKey(this.refs[context]);
        break;
      case "cmd":
        // do nothing
        this.flashKey(this.refs[context]);
        break;
      case "opt":
        // do nothing
        this.flashKey(this.refs[context]);
        break;
      case "fn":
        // do nothing
        this.flashKey(this.refs[context]);
        break;
      default:
        if (this.isShiftEnabled) {
          if (value.includes(" ")) {
            this.typedText += value.split(" ")[1];
          } else {
            this.typedText += value.toUpperCase();
          }
          // reset shift
          this.isShiftEnabled = false;
          this.deActivateKey(this.shiftKeyRef);
        } else {
          if (value.includes(" ")) {
            this.typedText += value.split(" ")[0];
          } else {
            this.typedText += this.isCapsEnabled ? value.toUpperCase() : value;
          }
        }
        this.flashKey(this.refs[context]);
        break;
    }
    this.setTextOnMonitor();
  }

  setTextOnMonitor(){
    this.props.setScreenText(this.typedText);
    // if(this.refs["typingArea"]) {
    //   this.refs["typingArea"].innerHTML = "<pre>" + this.typedText + "</pre>";
    // }
  }

  handleKeyDown(event, callback) {
    console.log(" key pressed", event.key.trim());
    console.log(event.altKey);
    console.log(event.charCode);
    console.log(event.ctrlKey);
    console.log(event.metaKey);
    console.log(event.target);
    console.log(event.shiftKey);
    console.log(event.currentTarget);
    console.log(event.keyCode);
    console.log(event.detail);
    this.keyPressAction("button_" + event.key.trim(), event.key);
  }

  render() {
    return (
      <div className="keyboard">
        {/* <div className="typingArea" onKeyDown={this.handleKeyDown} tabIndex="0">
          <span ref="typingArea"></span>
          <span className="cursorSpan">|</span>
        </div> */}
        <div className="keyboard-svg">
          <svg
            id="kbd"
            xmlns="http://www.w3.org/2000/svg"
            // width="100%"
            // height="100%"
            width="500"
            height="184.75"
            // viewBox="0 0 500 184.75"
          >
            <g id="Keyboard" transform="translate(-727 -732)">
              <g
                id="Rectangle_2"
                data-name="Rectangle 2"
                transform="translate(727 732)"
                fill={this.keyboardFrameInnerInsetColor}
                stroke={this.keyboardFrameOuterInsetColor}
                strokeLinejoin="round"
                strokeWidth="10"
              >
                <rect width="500" height="184.75" stroke="none" rx="10"/>
                <rect x="5" y="5" width="490" height="174.75" fill="none" />
              </g>
              <g
                id="Rectangle_3"
                data-name="Rectangle 3"
                transform="translate(744 747)"
                fill={this.keyboardBackgroundColor}
                stroke={this.keyboardFrameInnerBorderColor}
                strokeWidth="1"
                strokeLinejoin="round"
              >
                <rect width="466" height="154" stroke="none" />
                <rect x="0.5" y="0.5" width="465" height="153" fill="none" />
              </g>
              <g id="Row1">
                {/* Keyboard Key - ~ */}
                <g
                  ref="button_~"
                  className="keyboard-key"
                  transform="translate(751 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_~", "~ `")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_"
                    data-name="~`"
                    transform="translate(7.5 17.43)"
                    fill={this.keyTextColor}
                    fontSize="13"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      ~ `
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 1 */}
                <g
                  ref="button_1"
                  className="keyboard-key"
                  transform="translate(782 752)"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_1", "1 !")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_1"
                    data-name="1"
                    transform="translate(5 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      1 !
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 2 */}
                <g
                  ref="button_2"
                  className="keyboard-key"
                  transform="translate(813 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_2", "2 @")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_2-2"
                    data-name="2"
                    transform="translate(4 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      2 @
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 3 */}
                <g
                  ref="button_3"
                  className="keyboard-key"
                  transform="translate(844 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_3", "3 #")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_3"
                    data-name="3"
                    transform="translate(5 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      3 #
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 4 */}
                <g
                  ref="button_4"
                  className="keyboard-key"
                  transform="translate(875 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_4", "4 $")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_4"
                    data-name="4"
                    transform="translate(6 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      4 $
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 5 */}
                <g
                  ref="button_5"
                  className="keyboard-key"
                  transform="translate(906 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_5", "5 %")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_5"
                    data-name="5"
                    transform="translate(5 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      5 %
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 6 */}
                <g
                  ref="button_6"
                  className="keyboard-key"
                  transform="translate(937 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_6", "6 ^")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_6"
                    data-name="6"
                    transform="translate(6 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      6 ^
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 7 */}
                <g
                  ref="button_7"
                  className="keyboard-key"
                  transform="translate(968 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_7", "7 &")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_7"
                    data-name="7"
                    transform="translate(5 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      7 {"&"}
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 8 */}
                <g
                  ref="button_8"
                  className="keyboard-key"
                  transform="translate(999 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_8", "8 *")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_8"
                    data-name="8"
                    transform="translate(6 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      8 *
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 9 */}
                <g
                  ref="button_9"
                  className="keyboard-key"
                  transform="translate(1030 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_9", "9 (")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                  <text
                    id="_9"
                    data-name="9"
                    transform="translate(6 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      9 (
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - 0 */}
                <g
                  ref="button_0"
                  className="keyboard-key"
                  transform="translate(1061 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_0", "0 )")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_0"
                    data-name="0"
                    transform="translate(6 13)"
                    fill={this.keyTextColor}
                    fontSize="10"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      0 )
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - -_ */}
                <g
                  ref="button_-"
                  className="keyboard-key"
                  transform="translate(1092 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_-", "- _")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_-_"
                    data-name="-_"
                    transform="translate(6.5 12.43)"
                    fill={this.keyTextColor}
                    fontSize="11"
                    strokeWidth="0.25"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      - _
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - += */}
                <g
                  ref="button_+"
                  className="keyboard-key"
                  transform="translate(1123 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_+", "+ =")}
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="_2"
                    data-name="+ ="
                    transform="translate(4 15)"
                    fill={this.keyTextColor}
                    strokeWidth="0.25"
                    fontSize="12"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      + =
                    </tspan>
                  </text>
                </g>
                {/* Keyboard Key - Del */}
                <g
                  ref="button_del"
                  className="keyboard-key"
                  transform="translate(1154 752)"
                  data-name="button"
                  fill={this.keyBackgroundColor}
                  stroke={this.keyBorderColor}
                  strokeWidth={this.keyBorderStrokeWidth}
                  onClick={this.keyPressAction.bind(this, "button_del", "Del")}
                >
                  <rect width="45" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="42"
                    height="17.859"
                    fill="none"
                  />

                  <text
                    id="Del"
                    transform="translate(14.75 14.537)"
                    fill={this.keyTextColor}
                    strokeWidth="0.25"
                    fontSize="12"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    <tspan x="0" y="0">
                      Del
                    </tspan>
                  </text>
                </g>
              </g>
              <g id="Row2">
                {/* Keyboard Key - Tab */}
                <g
                  id="Key-16"
                  className="keyboard-key"
                  transform="translate(-1 25)"
                >
                  <g
                    ref="button_tab"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_tab",
                      "Tab"
                    )}
                  >
                    <rect width="43.5" height="28" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="40.5"
                      height="25"
                      fill="none"
                    />

                    <text
                      id="Tab"
                      transform="translate(9 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Tab
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Q */}
                <g
                  id="Key-25"
                  className="keyboard-key"
                  transform="translate(47 25)"
                >
                  <g
                    ref="button_q"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_q", "Q")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="Q"
                      transform="translate(7 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Q
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - W */}
                <g
                  id="Key-18"
                  className="keyboard-key"
                  transform="translate(78 25)"
                >
                  <g
                    ref="button_w"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_w", "W")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="W"
                      transform="translate(6 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        W
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - E */}
                <g
                  id="Key-27"
                  className="keyboard-key"
                  transform="translate(109 25)"
                >
                  <g
                    ref="button_e"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_e", "E")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="E"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        E
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - R */}
                <g
                  id="Key-17"
                  className="keyboard-key"
                  transform="translate(140 25)"
                >
                  <g
                    ref="button_r"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_r", "R")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="R"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        R
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - T */}
                <g
                  id="Key-26"
                  className="keyboard-key"
                  transform="translate(171 25)"
                >
                  <g
                    ref="button_t"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_t", "T")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="T"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        T
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Y */}
                <g
                  id="Key-19"
                  className="keyboard-key"
                  transform="translate(202 25)"
                >
                  <g
                    ref="button_y"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_y", "Y")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="Y"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Y
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - U */}
                <g
                  id="Key-28"
                  className="keyboard-key"
                  transform="translate(233 25)"
                >
                  <g
                    ref="button_u"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_u", "U")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="U"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        U
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - I */}
                <g
                  id="Key-15"
                  className="keyboard-key"
                  transform="translate(264 25)"
                >
                  <g
                    ref="button_i"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_i", "I")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="I"
                      transform="translate(11 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        I
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - O */}
                <g
                  id="Key-21"
                  className="keyboard-key"
                  transform="translate(295 25)"
                >
                  <g
                    ref="button_o"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_o", "O")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="O"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        O
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - P */}
                <g
                  id="Key-20"
                  className="keyboard-key"
                  transform="translate(326 25)"
                >
                  <g
                    ref="button_p"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_p", "P")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="P"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        P
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - {[ */}
                <g
                  id="Key-22"
                  className="keyboard-key"
                  transform="translate(357 25)"
                >
                  <g
                    ref="button_{"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_{", "{ [")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_3-2"
                      data-name="{ ["
                      transform="translate(7 18)"
                      fill={this.keyTextColor}
                      fontSize="13"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        [ {"{"}
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - ]} */}
                <g
                  id="Key-23"
                  className="keyboard-key"
                  transform="translate(388 25)"
                >
                  <g
                    ref="button_}"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_}", "} ]")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_4-2"
                      data-name="} ]"
                      transform="translate(7 18)"
                      fill={this.keyTextColor}
                      fontSize="13"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        ] {"}"}
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - |\ */}
                <g
                  id="Key-24"
                  className="keyboard-key"
                  transform="translate(419 25)"
                >
                  <g
                    ref="button_|"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_|", "| \\")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_5-2"
                      data-name="| \"
                      transform="translate(7 18)"
                      fill={this.keyTextColor}
                      fontSize="13"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        | \
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g id="Row3">
                {/* Keyboard Key - Caps */}
                <g
                  id="Key-29"
                  className="keyboard-key"
                  transform="translate(-1 57)"
                >
                  <g
                    ref="button_caps"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_caps",
                      "Caps"
                    )}
                  >
                    <rect width="58" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="55" height="25" fill="none" />
                    <text
                      transform="translate(6 17)"
                      fill={this.keyTextColor}
                      fontSize="12"
                      data-name="Caps Lock"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Caps Lk
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - A */}
                <g
                  id="Key-30"
                  className="keyboard-key"
                  transform="translate(61 57)"
                >
                  <g
                    ref="button_a"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_a", "A")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      transform="translate(7 18)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      fontWeight="100"
                      data-name="A"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif, Sans Serif"
                    >
                      <tspan x="0" y="0">
                        A
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - S */}
                <g
                  id="Key-35"
                  className="keyboard-key"
                  transform="translate(92 57)"
                >
                  <g
                    ref="button_s"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_s", "S")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="S"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        S
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - D */}
                <g
                  id="Key-31"
                  className="keyboard-key"
                  transform="translate(123 57)"
                >
                  <g
                    ref="button_d"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_d", "D")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                    <text
                      id="D"
                      transform="translate(7 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        D
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - F */}
                <g
                  id="Key-36"
                  className="keyboard-key"
                  transform="translate(154 57)"
                >
                  <g
                    ref="button_f"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_f", "F")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="F"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        F
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - G */}
                <g
                  id="Key-32"
                  className="keyboard-key"
                  transform="translate(185 57)"
                >
                  <g
                    ref="button_g"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_g", "G")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="G"
                      transform="translate(7 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        G
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - H */}
                <g
                  id="Key-37"
                  className="keyboard-key"
                  transform="translate(216 57)"
                >
                  <g
                    ref="button_h"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_h", "H")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="H"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        H
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - J */}
                <g
                  id="Key-33"
                  className="keyboard-key"
                  transform="translate(247 57)"
                >
                  <g
                    ref="button_j"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_j", "J")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="J"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        J
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - K */}
                <g
                  id="Key-38"
                  className="keyboard-key"
                  transform="translate(278 57)"
                >
                  <g
                    ref="button_k"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_k", "K")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="K"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        K
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - L */}
                <g
                  id="Key-34"
                  className="keyboard-key"
                  transform="translate(309 57)"
                >
                  <g
                    ref="button_l"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_l", "L")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="L"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        L
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - :; */}
                <g
                  id="Key-39"
                  className="keyboard-key"
                  transform="translate(340 57)"
                >
                  <g
                    ref="button_:"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_:", ": ;")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id=":_"
                      data-name=": ;"
                      transform="translate(8 18)"
                      fill={this.keyTextColor}
                      strokeWidth="0.4"
                      fontSize="12"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        : ;
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - '" */}
                <g
                  id="Key-40"
                  className="keyboard-key"
                  transform="translate(371 57)"
                >
                  <g
                    ref="button_quote"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_quote",
                      "' \""
                    )}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_6-2"
                      data-name="“ ‘"
                      transform="translate(7 18)"
                      fill={this.keyTextColor}
                      strokeWidth="0.4"
                      fontSize="12"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        {"' \""}
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Enter */}
                <g id="Enter" className="keyboard-key">
                  <g
                    data-name="button"
                    fill="none"
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_enter",
                      "Enter"
                    )}
                  >
                    <path
                      id="Path_1"
                      ref="button_enter"
                      data-name="Path 1"
                      d="M1154,809h45v55h-24.648V836.113H1154Z"
                      transform="translate(3.314 2.093)"
                      fill="none"
                      stroke={this.keyBorderColor}
                      strokeWidth={this.keyBorderStrokeWidth}
                    />
                    <text
                      id="Enter-2"
                      data-name="Enter"
                      transform="translate(1171.394 829.436)"
                      fill={this.keyTextColor}
                      fontSize="10"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Enter
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g id="Row4">
                {/* Keyboard Key - Shift */}
                <g
                  id="Key-41"
                  className="keyboard-key"
                  transform="translate(-1 89)"
                >
                  <g
                    ref="button_shift"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_shift",
                      "Shift"
                    )}
                  >
                    <rect width="67.598" height="28" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="64.598"
                      height="25"
                      fill="none"
                    />

                    <text
                      id="Shift"
                      transform="translate(10 18)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="13"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Shift
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Z */}
                <g
                  id="Key-42"
                  className="keyboard-key"
                  transform="translate(71 89)"
                >
                  <g
                    ref="button_z"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_z", "Z")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="Z"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Z
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - X */}
                <g
                  id="Key-47"
                  className="keyboard-key"
                  transform="translate(102 89)"
                >
                  <g
                    ref="button_x"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_x", "X")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="X"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        X
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - C */}
                <g
                  id="Key-44"
                  className="keyboard-key"
                  transform="translate(133 89)"
                >
                  <g
                    ref="button_c"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_c", "C")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="C"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        C
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - V */}
                <g
                  id="Key-49"
                  className="keyboard-key"
                  transform="translate(164 89)"
                >
                  <g
                    ref="button_v"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_v", "V")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="V"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        V
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - B */}
                <g
                  id="Key-43"
                  className="keyboard-key"
                  transform="translate(195 89)"
                >
                  <g
                    ref="button_b"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_b", "B")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="B"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        B
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - N */}
                <g
                  id="Key-48"
                  className="keyboard-key"
                  transform="translate(226 89)"
                >
                  <g
                    ref="button_n"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_n", "N")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="N"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        N
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - M */}
                <g
                  id="Key-45"
                  className="keyboard-key"
                  transform="translate(257 89)"
                >
                  <g
                    ref="button_m"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_m", "M")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="M"
                      transform="translate(8 19)"
                      fill={this.keyTextColor}
                      fontSize="15"
                      strokeWidth="0.25"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        M
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - <, */}
                <g
                  id="Key-50"
                  className="keyboard-key"
                  transform="translate(288 89)"
                >
                  <g
                    ref="button_<"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_<", "< ,")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_7-2"
                      data-name="&lt; ,"
                      transform="translate(7 19)"
                      fill={this.keyTextColor}
                      strokeWidth="0.4"
                      fontSize="13"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        &lt; ,
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - >. */}
                <g
                  id="Key-46"
                  className="keyboard-key"
                  transform="translate(319 89)"
                >
                  <g
                    ref="button_>"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_>", "> .")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_."
                      data-name="&gt; ."
                      transform="translate(7 19)"
                      fill={this.keyTextColor}
                      strokeWidth="0.4"
                      fontSize="13"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        &gt; .
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - ?/ */}
                <g
                  id="Key-51"
                  className="keyboard-key"
                  transform="translate(350 89)"
                >
                  <g
                    ref="button_?"
                    data-name="button"
                    transform="translate(752 752)"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_?", "? /")}
                  >
                    <rect width="27" height="28" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="25" fill="none" />

                    <text
                      id="_8-2"
                      data-name="? /"
                      transform="translate(6 19)"
                      fill={this.keyTextColor}
                      strokeWidth="0.4"
                      fontSize="13"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        ? /
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Up */}
                <g id="Up">
                  <g
                    id="Key-52"
                    className="keyboard-key"
                    data-name="Key"
                    transform="translate(1137 847.635)"
                  >
                    <g
                      ref="button_up"
                      data-name="button"
                      fill={this.keyBackgroundColor}
                      stroke={this.keyBorderColor}
                      strokeWidth={this.keyBorderStrokeWidth}
                      onClick={this.keyPressAction.bind(this, "button_up", "↑")}
                    >
                      <rect width="31.089" height="21" stroke="none" />
                      <rect
                        x="1.5"
                        y="1.5"
                        width="28.089"
                        height="18"
                        fill="none"
                      />

                      <text
                        id="_9-2"
                        data-name="↑"
                        transform="translate(12 14)"
                        fill={this.keyTextColor}
                        strokeWidth="0.4"
                        fontSize="12"
                        fontFamily="LucidaGrande, Lucida Grande"
                      >
                        <tspan x="0" y="0">
                          ↑
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </g>
              <g id="Row5">
                {/* Keyboard Key - Fn */}
                <g
                  id="Key-53"
                  transform="translate(751 873.635)"
                  className="keyboard-key"
                >
                  <g
                    ref="button_fn"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(this, "button_fn", "Fn")}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Fn"
                      transform="translate(6 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="10"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Fn
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Ctrl */}
                <g
                  id="Key-56"
                  className="keyboard-key"
                  transform="translate(782 873.635)"
                >
                  <g
                    ref="button_ctrl"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_ctrl",
                      "Ctrl"
                    )}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Ctrl"
                      transform="translate(5 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="10"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Ctrl
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Lt Opt */}
                <g
                  id="Key-54"
                  className="keyboard-key"
                  transform="translate(813 873.635)"
                >
                  <g
                    ref="button_opt_lt"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_opt_lt",
                      "Opt"
                    )}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Opt"
                      transform="translate(5 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="10"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Opt
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Lt Cmd */}
                <g
                  id="Key-57"
                  className="keyboard-key"
                  transform="translate(844 873.635)"
                >
                  <g
                    ref="button_cmd_lt"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_cmd_lt",
                      "Cmd"
                    )}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Cmd"
                      transform="translate(3.5 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="9"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Cmd
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Space */}
                <g
                  id="Key-59"
                  className="keyboard-key"
                  transform="translate(875 873.635)"
                >
                  <g
                    ref="button_space"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_space",
                      "space"
                    )}
                  >
                    <rect width="161" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="158" height="18" fill="none" />
                  </g>
                </g>
                {/* Keyboard Key - Rt Cmd */}
                <g
                  id="Key-58"
                  className="keyboard-key"
                  transform="translate(1040 873.635)"
                >
                  <g
                    ref="button_cmd_rt"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_cmd_rt",
                      "Cmd"
                    )}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Cmd-2"
                      data-name="Cmd"
                      transform="translate(3.5 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="9"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Cmd
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Rt Opt */}
                <g
                  id="Key-55"
                  className="keyboard-key"
                  transform="translate(1071 873.635)"
                >
                  <g
                    ref="button_opt_rt"
                    data-name="button"
                    fill={this.keyBackgroundColor}
                    stroke={this.keyBorderColor}
                    strokeWidth={this.keyBorderStrokeWidth}
                    onClick={this.keyPressAction.bind(
                      this,
                      "button_opt_rt",
                      "Opt"
                    )}
                  >
                    <rect width="27" height="21" stroke="none" />
                    <rect x="1.5" y="1.5" width="24" height="18" fill="none" />

                    <text
                      id="Opt-2"
                      data-name="Opt"
                      transform="translate(5 13)"
                      fill={this.keyTextColor}
                      strokeWidth="0.25"
                      fontSize="10"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      <tspan x="0" y="0">
                        Opt
                      </tspan>
                    </text>
                  </g>
                </g>
                {/* Keyboard Key - Left */}
                <g id="Left" data-name="Left" transform="translate(-35 26)">
                  <g
                    id="Key-62"
                    className="keyboard-key"
                    data-name="Key"
                    transform="translate(1137 847.635)"
                  >
                    <g
                      ref="button_left"
                      data-name="button"
                      fill={this.keyBackgroundColor}
                      stroke={this.keyBorderColor}
                      strokeWidth={this.keyBorderStrokeWidth}
                      onClick={this.keyPressAction.bind(
                        this,
                        "button_left",
                        "←"
                      )}
                    >
                      <rect width="31.089" height="21" stroke="none" />
                      <rect
                        x="1.5"
                        y="1.5"
                        width="28.089"
                        height="18"
                        fill="none"
                      />

                      <text
                        id="_12"
                        data-name="←"
                        transform="translate(8 14)"
                        fill={this.keyTextColor}
                        strokeWidth="0.4"
                        fontSize="13"
                        fontFamily="LucidaGrande, Lucida Grande"
                      >
                        <tspan x="0" y="0">
                          ←
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                {/* Keyboard Key - Down */}
                <g id="Down" data-name="Down" transform="translate(0 26)">
                  <g
                    id="Key-60"
                    className="keyboard-key"
                    data-name="Key"
                    transform="translate(1137 847.635)"
                  >
                    <g
                      ref="button_down"
                      data-name="button"
                      fill={this.keyBackgroundColor}
                      stroke={this.keyBorderColor}
                      strokeWidth={this.keyBorderStrokeWidth}
                      onClick={this.keyPressAction.bind(
                        this,
                        "button_down",
                        "↓"
                      )}
                    >
                      <rect width="31.089" height="21" stroke="none" />
                      <rect
                        x="1.5"
                        y="1.5"
                        width="28.089"
                        height="18"
                        fill="none"
                      />

                      <text
                        id="_10"
                        data-name="↓"
                        transform="translate(12 14)"
                        fill={this.keyTextColor}
                        strokeWidth="0.4"
                        fontSize="13"
                        fontFamily="LucidaGrande, Lucida Grande"
                      >
                        <tspan x="0" y="0">
                          ↓
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                {/* Keyboard Key - Right */}
                <g id="Right" data-name="Right" transform="translate(35 26)">
                  <g
                    id="Key-61"
                    className="keyboard-key"
                    data-name="Key"
                    transform="translate(1137 847.635)"
                  >
                    <g
                      ref="button_right"
                      data-name="button"
                      fill={this.keyBackgroundColor}
                      stroke={this.keyBorderColor}
                      strokeWidth={this.keyBorderStrokeWidth}
                      onClick={this.keyPressAction.bind(
                        this,
                        "button_right",
                        "→"
                      )}
                    >
                      <rect width="31.089" height="21" stroke="none" />
                      <rect
                        x="1.5"
                        y="1.5"
                        width="28.089"
                        height="18"
                        fill="none"
                      />

                      <text
                        id="_11"
                        data-name="→"
                        transform="translate(8 14)"
                        fill={this.keyTextColor}
                        strokeWidth="0.4"
                        fontSize="13"
                        fontFamily="LucidaGrande, Lucida Grande"
                      >
                        <tspan x="0" y="0">
                          →
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
