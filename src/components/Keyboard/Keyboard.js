import React, { Component } from "react";
import "./Keyboard.scss";
import "../../tailwind.output.css";
// import KeyboardResource from './Keyboard_pa.svg';
import $ from "jquery";
import { findDOMNode } from "react-dom";

export default class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "Hello",
    };
  }

  backlitColorCode = "#39FF96";

  componentDidMount() {
    // let svgItem = this.refs.button29;
    // svgItem.addEventListener("click", () => {
    //   // alert("caps");
    //   svgItem.setAttribute("fill", this.backlitColorCode);
    //   setTimeout(() => {
    //     svgItem.setAttribute("fill", "#fff");
    //   }, 200);
    // });
  }

  keyPressAction(context, value) {
    console.log(context);
    console.log(value);
    let svgItem = this.refs[context];
    svgItem.setAttribute("fill", this.backlitColorCode);
    setTimeout(() => {
      svgItem.setAttribute("fill", "#fff");
    }, 200);
    this.refs.typingArea.innerHTML = context + "" + value;
  }

  render() {
    return (
      <div className="keyboard">
        <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
          <div className="ml-6 pt-1">
            <h1 className="text-2xl text-blue-700 leading-tight">
              Tailwind and Create React App
            </h1>
            <p className="text-base text-gray-700 leading-normal">
              Building apps together
            </p>
          </div>
        </div>
        <div id="textX">PG</div>
        <div ref="typingArea">jjjjj</div>
        <svg
          id="kbd"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="184.75"
          viewBox="0 0 500 184.75"
        >
          <g id="Keyboard" transform="translate(-727 -732)">
            <g
              id="Rectangle_2"
              data-name="Rectangle 2"
              transform="translate(727 732)"
              fill="#b2b0b0"
              stroke="#707070"
              strokeLinejoin="round"
              strokeWidth="10"
            >
              <rect width="500" height="184.75" stroke="none" />
              <rect x="5" y="5" width="490" height="174.75" fill="none" />
            </g>
            <g
              id="Rectangle_3"
              data-name="Rectangle 3"
              transform="translate(744 747)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1"
            >
              <rect width="466" height="154" stroke="none" />
              <rect x="0.5" y="0.5" width="465" height="153" fill="none" />
            </g>
            <g id="Row1">
              <g id="Key" transform="translate(782 752)">
                <g id="button" fill="#fff" stroke="#707070" strokeWidth="3">
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_1"
                  data-name="1"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    1
                  </tspan>
                </text>
              </g>
              <g id="Key-2" data-name="Key" transform="translate(751 752)">
                <g
                  id="button-2"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_"
                  data-name="~`"
                  transform="translate(7.5 17.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    ~`
                  </tspan>
                </text>
              </g>
              <g id="Key-3" data-name="Key" transform="translate(906 752)">
                <g
                  id="button-3"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_5"
                  data-name="5"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    5
                  </tspan>
                </text>
              </g>
              <g id="Key-4" data-name="Key" transform="translate(844 752)">
                <g
                  id="button-4"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_3"
                  data-name="3"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    3
                  </tspan>
                </text>
              </g>
              <g id="Key-5" data-name="Key" transform="translate(968 752)">
                <g
                  id="button-5"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_7"
                  data-name="7"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    7
                  </tspan>
                </text>
              </g>
              <g id="Key-6" data-name="Key" transform="translate(1030 752)">
                <g
                  id="button-6"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_9"
                  data-name="9"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    9
                  </tspan>
                </text>
              </g>
              <g id="Key-7" data-name="Key" transform="translate(1123 752)">
                <g
                  id="button-7"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_2"
                  data-name="+ ="
                  transform="translate(6.5 13.43)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    + =
                  </tspan>
                </text>
              </g>
              <g id="Key-8" data-name="Key" transform="translate(813 752)">
                <g
                  id="button-8"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_2-2"
                  data-name="2"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    2
                  </tspan>
                </text>
              </g>
              <g id="Key-9" data-name="Key" transform="translate(937 752)">
                <g
                  id="button-9"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_6"
                  data-name="6"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    6
                  </tspan>
                </text>
              </g>
              <g id="Key-10" data-name="Key" transform="translate(875 752)">
                <g
                  id="button-10"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_4"
                  data-name="4"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    4
                  </tspan>
                </text>
              </g>
              <g id="Key-11" data-name="Key" transform="translate(999 752)">
                <g
                  id="button-11"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_8"
                  data-name="8"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    8
                  </tspan>
                </text>
              </g>
              <g id="Key-12" data-name="Key" transform="translate(1092 752)">
                <g
                  id="button-12"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_-_"
                  data-name="-_"
                  transform="translate(6.5 12.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    -_
                  </tspan>
                </text>
              </g>
              <g id="Key-13" data-name="Key" transform="translate(1061 752)">
                <g
                  id="button-13"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="24"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="_0"
                  data-name="0"
                  transform="translate(7.5 16.43)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    0
                  </tspan>
                </text>
              </g>
              <g id="Key-14" data-name="Key" transform="translate(1154 752)">
                <g
                  id="button-14"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="45" height="20.859" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="42"
                    height="17.859"
                    fill="none"
                  />
                </g>
                <text
                  id="Del"
                  transform="translate(14.75 14.537)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Del
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Row2">
              <g id="Key-15" data-name="Key" transform="translate(264 25)">
                <g
                  id="button-15"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="I"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    I
                  </tspan>
                </text>
              </g>
              <g id="Key-16" data-name="Key" transform="translate(-1 25)">
                <g
                  id="button-16"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="43.5" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="40.5" height="25" fill="none" />
                </g>
                <text
                  id="Tab"
                  transform="translate(764.894 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Tab
                  </tspan>
                </text>
              </g>
              <g id="Key-17" data-name="Key" transform="translate(140 25)">
                <g
                  id="button-17"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="R"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    R
                  </tspan>
                </text>
              </g>
              <g id="Key-18" data-name="Key" transform="translate(78 25)">
                <g
                  id="button-18"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="W"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    W
                  </tspan>
                </text>
              </g>
              <g id="Key-19" data-name="Key" transform="translate(202 25)">
                <g
                  id="button-19"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="Y"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Y
                  </tspan>
                </text>
              </g>
              <g id="Key-20" data-name="Key" transform="translate(326 25)">
                <g
                  id="button-20"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="P"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    P
                  </tspan>
                </text>
              </g>
              <g id="Key-21" data-name="Key" transform="translate(295 25)">
                <g
                  id="button-21"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="O"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    O
                  </tspan>
                </text>
              </g>
              <g id="Key-22" data-name="Key" transform="translate(357 25)">
                <g
                  id="button-22"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_3-2"
                  data-name="{ ["
                  transform="translate(761.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    } [
                  </tspan>
                </text>
              </g>
              <g id="Key-23" data-name="Key" transform="translate(388 25)">
                <g
                  id="button-23"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_4-2"
                  data-name="} ]"
                  transform="translate(761.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    } ]
                  </tspan>
                </text>
              </g>
              <g id="Key-24" data-name="Key" transform="translate(419 25)">
                <g
                  id="button-24"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_5-2"
                  data-name="| \"
                  transform="translate(761.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    | \
                  </tspan>
                </text>
              </g>
              <g id="Key-25" data-name="Key" transform="translate(47 25)">
                <g
                  id="button-25"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="Q"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Q
                  </tspan>
                </text>
              </g>
              <g id="Key-26" data-name="Key" transform="translate(171 25)">
                <g
                  id="button-26"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="T"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    T
                  </tspan>
                </text>
              </g>
              <g id="Key-27" data-name="Key" transform="translate(109 25)">
                <g
                  id="button-27"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="E"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    E
                  </tspan>
                </text>
              </g>
              <g id="Key-28" data-name="Key" transform="translate(233 25)">
                <g
                  id="button-28"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="U"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    U
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Row3">
              <g
                id="Key-29"
                className="keyboard-key"
                data-name="Key"
                transform="translate(-1 57)"
              >
                <g
                  ref="button29"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                  onClick={this.keyPressAction.bind(
                    this,
                    "button29",
                    "Caps Lock"
                  )}
                >
                  <rect width="58" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="55" height="25" fill="none" />
                  <text
                    transform="translate(5 15)"
                    fill="#707070"
                    fontSize="10"
                    data-name="Caps Lock"
                    strokeWidth="1"
                    fontFamily="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Caps Lock
                    </tspan>
                  </text>
                </g>
              </g>

              <g id="Key-30" data-name="Key" transform="translate(61 57)">
                <g
                  id="button-30"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="A"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
              </g>
              <g id="Key-31" data-name="Key" transform="translate(123 57)">
                <g
                  id="button-31"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="D"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    D
                  </tspan>
                </text>
              </g>
              <g id="Key-32" data-name="Key" transform="translate(185 57)">
                <g
                  id="button-32"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="G"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    G
                  </tspan>
                </text>
              </g>
              <g id="Key-33" data-name="Key" transform="translate(247 57)">
                <g
                  id="button-33"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="J"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    J
                  </tspan>
                </text>
              </g>
              <g id="Key-34" data-name="Key" transform="translate(309 57)">
                <g
                  id="button-34"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="L"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    L
                  </tspan>
                </text>
              </g>
              <g id="Key-35" data-name="Key" transform="translate(92 57)">
                <g
                  id="button-35"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="S"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    S
                  </tspan>
                </text>
              </g>
              <g id="Key-36" data-name="Key" transform="translate(154 57)">
                <g
                  id="button-36"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="F"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    F
                  </tspan>
                </text>
              </g>
              <g id="Key-37" data-name="Key" transform="translate(216 57)">
                <g
                  id="button-37"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="H"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    H
                  </tspan>
                </text>
              </g>
              <g id="Key-38" data-name="Key" transform="translate(278 57)">
                <g
                  id="button-38"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="K"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    K
                  </tspan>
                </text>
              </g>
              <g id="Key-39" data-name="Key" transform="translate(340 57)">
                <g
                  id="button-39"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id=":_"
                  data-name=": ;"
                  transform="translate(761.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    : ;
                  </tspan>
                </text>
              </g>
              <g id="Key-40" data-name="Key" transform="translate(371 57)">
                <g
                  id="button-40"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_6-2"
                  data-name="“ ‘"
                  transform="translate(760.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    “ ‘
                  </tspan>
                </text>
              </g>
              <g id="Enter">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M1154,809h45v55h-24.648V836.113H1154Z"
                  transform="translate(3.314 2.093)"
                  fill="none"
                  stroke="#707070"
                  strokeWidth="3"
                />
                <text
                  id="Enter-2"
                  data-name="Enter"
                  transform="translate(1171.394 829.436)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Enter
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Row4">
              <g id="Key-41" data-name="Key" transform="translate(-1 89)">
                <g
                  id="button-41"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="67.598" height="28" stroke="none" />
                  <rect
                    x="1.5"
                    y="1.5"
                    width="64.598"
                    height="25"
                    fill="none"
                  />
                </g>
                <text
                  id="Shift"
                  transform="translate(773.992 770)"
                  fill="#707070"
                  fontSize="12"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Shift
                  </tspan>
                </text>
              </g>
              <g id="Key-42" data-name="Key" transform="translate(71 89)">
                <g
                  id="button-42"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="Z"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Z
                  </tspan>
                </text>
              </g>
              <g id="Key-43" data-name="Key" transform="translate(195 89)">
                <g
                  id="button-43"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="B"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    B
                  </tspan>
                </text>
              </g>
              <g id="Key-44" data-name="Key" transform="translate(133 89)">
                <g
                  id="button-44"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="C"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    C
                  </tspan>
                </text>
              </g>
              <g id="Key-45" data-name="Key" transform="translate(257 89)">
                <g
                  id="button-45"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="M"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    M
                  </tspan>
                </text>
              </g>
              <g id="Key-46" data-name="Key" transform="translate(319 89)">
                <g
                  id="button-46"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_."
                  data-name="&gt; ."
                  transform="translate(759.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    &gt; .
                  </tspan>
                </text>
              </g>
              <g id="Key-47" data-name="Key" transform="translate(102 89)">
                <g
                  id="button-47"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="X"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    X
                  </tspan>
                </text>
              </g>
              <g id="Key-48" data-name="Key" transform="translate(226 89)">
                <g
                  id="button-48"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="N"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    N
                  </tspan>
                </text>
              </g>
              <g id="Key-49" data-name="Key" transform="translate(164 89)">
                <g
                  id="button-49"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="V"
                  transform="translate(759.5 772)"
                  fill="#707070"
                  fontSize="16"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    V
                  </tspan>
                </text>
              </g>
              <g id="Key-50" data-name="Key" transform="translate(288 89)">
                <g
                  id="button-50"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_7-2"
                  data-name="&lt; ,"
                  transform="translate(759.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    &lt; ,
                  </tspan>
                </text>
              </g>
              <g id="Key-51" data-name="Key" transform="translate(350 89)">
                <g
                  id="button-51"
                  data-name="button"
                  transform="translate(752 752)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="28" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="25" fill="none" />
                </g>
                <text
                  id="_8-2"
                  data-name="? /"
                  transform="translate(759.5 770)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    ? /
                  </tspan>
                </text>
              </g>
              <g id="Up">
                <g
                  id="Key-52"
                  data-name="Key"
                  transform="translate(1137 847.635)"
                >
                  <g
                    id="button-52"
                    data-name="button"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth="3"
                  >
                    <rect width="31.089" height="21" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="28.089"
                      height="18"
                      fill="none"
                    />
                  </g>
                </g>
                <text
                  id="_9-2"
                  data-name="↑"
                  transform="translate(1149 862)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="LucidaGrande, Lucida Grande"
                >
                  <tspan x="0" y="0">
                    ↑
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Row5">
              <g id="Key-53" data-name="Key" transform="translate(751 873.635)">
                <g
                  id="button-53"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Fn"
                  transform="translate(6.5 14.009)"
                  fill="#707070"
                  fontSize="12"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Fn
                  </tspan>
                </text>
              </g>
              <g id="Key-54" data-name="Key" transform="translate(813 873.635)">
                <g
                  id="button-54"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Opt"
                  transform="translate(7.5 13.009)"
                  fill="#707070"
                  fontSize="8"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Opt
                  </tspan>
                </text>
              </g>
              <g
                id="Key-55"
                data-name="Key"
                transform="translate(1071 873.635)"
              >
                <g
                  id="button-55"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Opt-2"
                  data-name="Opt"
                  transform="translate(7.5 13.009)"
                  fill="#707070"
                  fontSize="8"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Opt
                  </tspan>
                </text>
              </g>
              <g id="Key-56" data-name="Key" transform="translate(782 873.635)">
                <g
                  id="button-56"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Ctrl"
                  transform="translate(7.5 13.009)"
                  fill="#707070"
                  fontSize="8"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Ctrl
                  </tspan>
                </text>
              </g>
              <g id="Key-57" data-name="Key" transform="translate(844 873.635)">
                <g
                  id="button-57"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Cmd"
                  transform="translate(5.5 13.587)"
                  fill="#707070"
                  fontSize="8"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Cmd
                  </tspan>
                </text>
              </g>
              <g
                id="Key-58"
                data-name="Key"
                transform="translate(1040 873.635)"
              >
                <g
                  id="button-58"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="27" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="24" height="18" fill="none" />
                </g>
                <text
                  id="Cmd-2"
                  data-name="Cmd"
                  transform="translate(5.5 13.587)"
                  fill="#707070"
                  fontSize="8"
                  fontFamily="HelveticaNeue, Helvetica Neue"
                >
                  <tspan x="0" y="0">
                    Cmd
                  </tspan>
                </text>
              </g>
              <g id="Key-59" data-name="Key" transform="translate(875 873.635)">
                <g
                  id="button-59"
                  data-name="button"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth="3"
                >
                  <rect width="161" height="21" stroke="none" />
                  <rect x="1.5" y="1.5" width="158" height="18" fill="none" />
                </g>
              </g>
              <g id="Up-2" data-name="Up" transform="translate(0 26)">
                <g
                  id="Key-60"
                  data-name="Key"
                  transform="translate(1137 847.635)"
                >
                  <g
                    id="button-60"
                    data-name="button"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth="3"
                  >
                    <rect width="31.089" height="21" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="28.089"
                      height="18"
                      fill="none"
                    />
                  </g>
                </g>
                <text
                  id="_10"
                  data-name="↓"
                  transform="translate(1149 862)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="LucidaGrande, Lucida Grande"
                >
                  <tspan x="0" y="0">
                    ↓
                  </tspan>
                </text>
              </g>
              <g id="Up-3" data-name="Up" transform="translate(35 26)">
                <g
                  id="Key-61"
                  data-name="Key"
                  transform="translate(1137 847.635)"
                >
                  <g
                    id="button-61"
                    data-name="button"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth="3"
                  >
                    <rect width="31.089" height="21" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="28.089"
                      height="18"
                      fill="none"
                    />
                  </g>
                </g>
                <text
                  id="_11"
                  data-name="→"
                  transform="translate(1149 862)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="LucidaGrande, Lucida Grande"
                >
                  <tspan x="0" y="0">
                    →
                  </tspan>
                </text>
              </g>
              <g id="Up-4" data-name="Up" transform="translate(-35 26)">
                <g
                  id="Key-62"
                  data-name="Key"
                  transform="translate(1137 847.635)"
                >
                  <g
                    id="button-62"
                    data-name="button"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth="3"
                  >
                    <rect width="31.089" height="21" stroke="none" />
                    <rect
                      x="1.5"
                      y="1.5"
                      width="28.089"
                      height="18"
                      fill="none"
                    />
                  </g>
                </g>
                <text
                  id="_12"
                  data-name="←"
                  transform="translate(1149 862)"
                  fill="#707070"
                  fontSize="10"
                  fontFamily="LucidaGrande, Lucida Grande"
                >
                  <tspan x="0" y="0">
                    ←
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>

        {/* <object id="keyboardObject" aria-label="Keyboard" type="image/svg+xml" data={KeyboardResource}></object> */}
      </div>
    );
  }
}
