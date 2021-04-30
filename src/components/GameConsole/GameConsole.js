import React from "react";
import "./GameConsole.scss";
import SnakeGame from "./Games/SnakeGame/SnakeGame";
import { GlobalConsumer } from "../../context-stores/global-store";

const KEYCODE_LEFT = 37;
const KEYCODE_UP = 38;
const KEYCODE_RIGHT = 39;
const KEYCODE_DOWN = 40;
const CONSOLE_PHONE = "phone";
const CONSOLE_GAMEBOY = "gameboy";

// TODO: try to make this a functional component
export default class GameConsole extends React.Component {
  constructor(props) {
    super(props);
    this.snakeGame = React.createRef();
    this.state = {
      consoleType: CONSOLE_PHONE,
      currentGameRef: this.snakeGame,
    };
    // this.handleClick = this.handleClick.bind(this)
    this.handlePhoneUp = this.handlePhoneUp.bind(this);
    this.handlePhoneDown = this.handlePhoneDown.bind(this);
    this.handlePhoneLeft = this.handlePhoneLeft.bind(this);
    this.handlePhoneRight = this.handlePhoneRight.bind(this);
  }

  handleClick(keycode) {
    this.snakeGame.current.handleKeyDown(
      new KeyboardEvent("keydown", { keyCode: keycode, cancelable: false })
    );
  }

  handlePhoneUp() {
    this.snakeGame.current.handleUp();
  }

  handlePhoneDown() {
    this.snakeGame.current.handleDown();
  }

  handlePhoneRight() {
    this.snakeGame.current.handleRight();
  }

  handlePhoneLeft() {
    this.snakeGame.current.handleLeft();
  }

  render() {
    let gameboyControls = (
      <div className="dpad">
        <div
          className="dpad-up"
          onClick={() => {
            this.handleClick(KEYCODE_UP);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_UP);
          }}
        ></div>
        <div
          className="dpad-left"
          onClick={() => {
            this.handleClick(KEYCODE_LEFT);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_LEFT);
          }}
        ></div>
        <div
          className="dpad-right"
          onClick={() => {
            this.handleClick(KEYCODE_RIGHT);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_RIGHT);
          }}
        ></div>
        <div
          className="dpad-down"
          onClick={() => {
            this.handleClick(KEYCODE_DOWN);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handleClick(KEYCODE_DOWN);
          }}
        ></div>
      </div>
    );

    let phoneControls = (
      <div>
        <svg
          xmlnsdc="http://purl.org/dc/elements/1.1/"
          xmlnscc="http://creativecommons.org/ns#"
          xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlnssvg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="351.6286"
          height="686.81451"
          viewBox="0 0 93.035067 181.71967"
          version="1.1"
          id="svg8"
        >
          <defs id="defs2">
            <linearGradient id="linearGradient994">
              <stop
                style={{ stopColor: "#1b1b2a", stopOpacity: 1 }}
                offset={0}
                id="stop990"
              />
              <stop
                style={{ stopColor: "#363654", stopOpacity: 1 }}
                offset="0.60000193"
                id="stop1000"
              />
              <stop
                style={{ stopColor: "#47477c", stopOpacity: 1 }}
                offset="0.90000337"
                id="stop1002"
              />
              <stop
                style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                offset={1}
                id="stop992"
              />
            </linearGradient>
            <linearGradient
              xlinkHref="#linearGradient994"
              id="linearGradient996"
              x1="97.895836"
              y1="46.302082"
              x2="100.54166"
              y2="46.302082"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-24.211202,-33.114694)"
            />
            <filter
              style={{ colorInterpolationFilters: "sRGB" }}
              id="filter1146"
              x="-0.12790817"
              width="1.2558163"
              y="-0.059295189"
              height="1.1185904"
            >
              <feGaussianBlur
                stdDeviation="3.9482768"
                id="feGaussianBlur1148"
              />
            </filter>
          </defs>
          <g id="layer1" transform="translate(-55.08247,-23.70475)">
            {/* Removing the phone shadow */}
            {/* <rect
              style={{
                mixBlendMode: "normal",
                fill: "#808080",
                fillRule: "evenodd",
                strokeWidth: "0.263279",
                filter: "url(#filter1146)",
              }}
              id="rect1032"
              width="74.083336"
              height="159.80832"
              x="64.558334"
              y="33.337502"
              ry="47.890438"
              rx="19.579163"
              transform="matrix(1,0,0,1.0165564,0,-0.55194971)"
            /> */}
            <path
              id="phone_body"
              style={{
                fill: "#3d3d60",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#595959",
                strokeWidth: "0.66145833",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d="m 91.895661,30.86451 c -10.253648,0 -21.742209,0.36171 -25.3242,3.536492 -3.582002,3.174782 -5.393234,66.462938 -4.717009,76.064798 l 0.517744,7.35156 c 2.616038,37.14569 4.443153,52.41581 5.362812,61.76119 0.915795,9.30613 0.214061,9.59307 23.437365,9.59307 h 6.234048 0.85191 6.234039 c 23.22331,0 22.52157,-0.28694 23.43736,-9.59307 0.91966,-9.34538 2.7468,-24.6155 5.36282,-61.76119 l 0.51774,-7.35156 c 0.67622,-9.60186 -1.135,-72.890016 -4.717,-76.064798 -3.58199,-3.174782 -15.07056,-3.536492 -25.3242,-3.536492 -1.92544,0 -3.941675,0.0051 -5.936446,0.01085 -1.994947,-0.0058 -4.011369,-0.01085 -5.936983,-0.01085 z"
            />
            <path
              id="display_frame"
              style={{
                fill: "#e6e6e6",
                fillRule: "evenodd",
                stroke: "#333333",
                strokeWidth: "0.396875",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
              }}
              d="m 96.333984,32.167969 c -8.067885,0.279907 -16.115939,1.001795 -24.143849,1.82001 -2.721173,0.45426 -5.247039,2.529221 -5.722902,5.327672 -0.850861,3.320453 -0.551082,6.798393 -0.834614,10.147085 -0.463342,11.71737 -1.54113,23.428592 -1.130813,35.164917 0.191516,6.772655 0.489771,13.543548 0.845902,20.308717 0.580552,7.62278 2.685035,15.38631 7.452176,21.49398 3.920007,5.09071 9.631223,8.70914 15.858549,10.24163 6.435669,1.63771 13.309877,1.50078 19.699467,-0.28024 6.48128,-1.92107 12.30224,-6.15144 15.8757,-11.92149 4.2167,-6.6217 5.9165,-14.53326 6.2388,-22.29514 0.35712,-6.546771 0.68593,-13.099465 0.85504,-19.655064 0.14545,-6.453871 -0.0968,-12.909723 -0.5733,-19.345283 -0.4521,-7.33672 -0.69665,-14.693896 -1.17602,-22.034138 -0.28187,-2.391778 -1.23054,-5.003505 -3.49793,-6.173696 -2.64056,-1.478542 -5.76701,-1.219329 -8.67251,-1.573017 -7.01139,-0.586264 -14.02973,-1.286345 -21.073696,-1.225943 z m 0.496094,2.748047 c 8.759602,0.0153 17.493082,0.475538 26.130302,1.755146 1.78008,0.356225 3.73991,1.419082 4.07387,3.369741 0.64914,2.774336 0.30823,5.648577 0.57113,8.464893 0.30584,8.961396 1.05743,17.906146 1.18649,26.873098 -0.0293,8.141913 -0.57282,16.248869 -1.0873,24.366245 -0.36866,3.277321 -2.26933,6.330711 -5.08393,8.062591 -3.50212,2.34919 -7.8268,3.13783 -11.92842,3.21446 -8.98923,-0.004 -18.05435,0.0667 -26.996908,-0.0554 -4.33105,-0.21139 -8.827378,-1.39299 -12.155174,-4.29476 -2.238314,-1.96995 -3.515976,-4.87374 -3.674904,-7.832196 -0.105492,-2.127976 -0.230346,-4.483498 -0.367094,-6.708608 -0.524121,-8.973199 -0.952777,-18.005774 -0.266716,-26.958882 0.505742,-7.975008 0.745816,-15.967751 1.16376,-23.947521 0.06757,-1.728806 1.05323,-3.517347 2.780105,-4.049649 3.321023,-1.209423 6.914649,-1.088491 10.377647,-1.537308 5.082763,-0.443115 10.168546,-0.685976 15.277142,-0.72186 z"
            />
            <path
              id="display"
              style={{
                fill: "#71aa5e",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "#000000",
                strokeWidth: "0.264583",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
              }}
              d="m 69.847656,64.046875 c -0.899579,0.281171 -0.50387,1.410077 -0.589844,2.104687 0.01302,11.961534 -0.02604,23.92559 0.01953,35.885548 0.221437,0.92756 1.349262,0.54414 2.030469,0.62109 18.149722,-0.007 36.301079,0.0147 54.449779,-0.011 0.93062,-0.18762 0.58914,-1.34305 0.65061,-2.01708 -0.0138,-11.990175 0.0275,-23.983197 -0.0206,-35.97159 -0.21014,-0.936054 -1.34813,-0.553103 -2.02936,-0.629193 -18.14973,0.0073 -36.301055,-0.01455 -54.449793,0.01091 z"
            />
            <g id="earpiece" transform="translate(22.824818,35.359759)">
              <ellipse
                style={{
                  fill: "url(#linearGradient996)",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path959"
                cx="75.007553"
                cy="13.187387"
                rx="1.3229167"
                ry="10.583333"
              />
              <ellipse
                style={{
                  fill: "#202032",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.288599",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="path1004"
                cx="75.007553"
                cy="5.6520514"
                rx="0.70279944"
                ry="0.35553384"
              />
              <ellipse
                style={{
                  fill: "#202032",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.338896",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="ellipse1006"
                cx="75.007553"
                cy="9.2469234"
                rx="0.868164"
                ry="0.39687499"
              />
              <ellipse
                style={{
                  fill: "#202032",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.442179",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="ellipse1008"
                cx="75.007553"
                cy="13.21381"
                rx="1.1327473"
                ry="0.51782739"
              />
              <ellipse
                style={{
                  fill: "#202032",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.338896",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="ellipse1010"
                cx="75.007553"
                cy="17.197092"
                rx="0.868164"
                ry="0.39687499"
              />
              <ellipse
                style={{
                  fill: "#202032",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: "0.288599",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                id="ellipse1012"
                cx="75.007553"
                cy="20.794157"
                rx="0.70279944"
                ry="0.35553384"
              />
            </g>
            <g
              id="lower_keys"
              transform="matrix(1.0690977,0,0,1.0317178,-6.4504047,-3.6307747)"
            >
              <path
                id="path944"
                style={{
                  fill: "#cccccc",
                  fillRule: "evenodd",
                  stroke: "none",
                  strokeWidth: "0.377889",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  fillOpacity: 1,
                }}
                d="m 69.337053,117.45846 c 2.171595,6.32692 6.263991,12.03853 11.863656,15.44203 6.676986,4.13095 14.698376,5.0575 22.299121,3.95116 6.16808,-0.88461 12.15491,-3.82344 16.3411,-8.7121 2.40875,-2.75636 4.2526,-6.01977 5.58924,-9.47412 -1.25185,-1.10894 -2.50368,-2.21787 -3.75554,-3.32682 -3.67798,4.9639 -9.29951,7.9273 -15.02379,9.43723 -8.147479,2.08096 -16.998917,1.4859 -24.68036,-2.10899 -3.553985,-1.69606 -6.869796,-4.11762 -9.250702,-7.39563 -1.127575,0.72909 -2.255151,1.45816 -3.382725,2.18724 z"
              />
              <g id="key_up_down">
                <path
                  id="path952"
                  style={{
                    fill: "#b3b3b3",
                    fillRule: "evenodd",
                    stroke: "#4d4d4d",
                    strokeWidth: "0.377889",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                  d="m 121.55386,114.26485 c -0.75551,0.44406 -1.17532,1.30528 -1.84417,1.87889 -2.15091,2.2236 -4.80497,4.01225 -7.564,5.32985 -3.39881,1.63102 -7.07931,2.59918 -10.79691,3.14673 -1.00741,0.18737 -1.16587,1.37212 -0.92773,2.19727 0.40164,3.23978 0.72553,6.50204 1.17866,9.72749 0.43455,0.95773 1.64522,0.86531 2.49357,0.61797 7.73415,-1.3689 14.89972,-6.00897 19.02842,-12.73216 1.23658,-1.98426 2.37039,-4.07064 3.14042,-6.2758 -0.0244,-1.25266 -1.36971,-1.7764 -2.1104,-2.58358 -0.75739,-0.62008 -1.47811,-1.65325 -2.59786,-1.30666 z"
                />
                <g id="key_up">
                  <path
                    id="path873"
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeWidth: 0,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    d="m 121.86328,114.2664 c -1.30276,0.39957 -2.03543,1.65874 -3.0792,2.45094 -1.77257,1.63394 -3.91617,2.79239 -5.80923,4.26094 -0.95739,1.08313 -0.17785,2.55988 0.22482,3.70839 0.68237,1.74576 1.24771,3.59594 2.33784,5.13481 0.75805,0.74029 1.95895,0.22774 2.49298,-0.53284 3.11511,-3.12179 5.67931,-6.80776 7.50076,-10.82302 0.40256,-1.21885 -0.37886,-2.42796 -1.34766,-3.11719 -0.6351,-0.56936 -1.42026,-1.17837 -2.32031,-1.08203 z"
                  />
                  <path
                    id="path935"
                    style={{
                      fill: "#40ff00",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      stroke: "#000",
                      strokeWidth: "0.1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                    }}
                    d="m 121.36058,123.53743 c 0.14344,-1.00996 0.39845,-2.80546 0.39845,-2.80546 0,0 0.0517,-0.29798 -0.0619,-0.44901 -0.1135,-0.15102 -0.41959,-0.19176 -0.41959,-0.19176 0,0 -2.01992,-0.28689 -2.80544,-0.39845 -0.18704,-0.0265 -0.30414,0.52921 -0.0797,0.56109 0.11222,0.016 2.80545,0.39844 2.80545,0.39844 0,0 -0.28687,2.01993 -0.39843,2.80546 -0.0265,0.18704 0.53452,0.26672 0.56108,0.0797 z"
                  />
                </g>
                <g id="key_down">
                  <path
                    id="path910"
                    style={{
                      fill: "none",
                      stroke: "#ffffff",
                      strokeWidth: 0,
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                    }}
                    d="m 110.92608,122.34493 c -2.07519,0.37225 -3.9585,1.40587 -6.01172,1.875 -1.07005,0.31919 -2.27325,0.39701 -3.35635,0.75993 -1.05243,0.66004 -0.65617,2.02958 -0.57685,3.04802 0.34498,2.62638 0.55464,5.29003 1.17734,7.86588 0.37482,0.89617 1.51369,1.07515 2.32277,0.69112 3.56835,-0.98106 7.00037,-2.53597 10.04246,-4.64425 0.84867,-0.81729 0.51344,-2.09756 0.0963,-3.04341 -0.706,-1.99265 -1.19044,-4.10704 -2.29748,-5.92534 -0.33731,-0.40638 -0.85945,-0.6863 -1.39648,-0.62695 z"
                  />
                  <path
                    id="path933"
                    style={{
                      fill: "#40ff00",
                      fillOpacity: 1,
                      fillRule: "evenodd",
                      stroke: "#000",
                      strokeWidth: "0.1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 4,
                      strokeDasharray: "none",
                    }}
                    d="m 106.3424,126.93903 c -0.4552,1.06805 -1.26444,2.96681 -1.26444,2.96681 0,0 -0.14458,0.31237 -0.0643,0.51184 0.0803,0.19946 0.40479,0.33441 0.40479,0.33441 0,0 2.1361,0.9104 2.96681,1.26444 0.19779,0.0843 0.49024,-0.49221 0.25289,-0.59337 -0.11867,-0.0506 -2.96681,-1.26443 -2.96681,-1.26443 0,0 0.91039,-2.13611 1.26443,-2.96681 0.0843,-0.1978 -0.50907,-0.45068 -0.59336,-0.25289 z"
                  />
                </g>
              </g>
              <g id="key_cancel">
                <path
                  id="path929"
                  style={{
                    fill: "#b3b3b3",
                    fillRule: "evenodd",
                    stroke: "#4d4d4d",
                    strokeWidth: "0.377889",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                  d="m 72.368013,115.03557 c -1.087682,0.20833 -2.001174,0.94995 -2.827406,1.63233 -0.855756,1.18285 0.05627,2.54781 0.52845,3.68205 2.439672,5.40942 6.427011,10.24705 11.642706,13.16218 1.318932,0.41116 2.334118,-0.8624 2.722371,-1.96739 1.015828,-1.98632 2.160755,-3.92109 3.072551,-5.96425 0.208658,-1.30488 -1.101049,-2.17203 -2.234963,-2.34925 -4.459577,-1.55609 -8.638244,-4.14394 -11.640037,-7.83239 -0.352401,-0.28202 -0.818229,-0.39514 -1.263672,-0.36328 z"
                />
                <path
                  id="path940"
                  style={{
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                  d="m 79.724727,123.79176 c -0.891813,0.004 -1.612497,0.72847 -1.61249,1.62029 -2e-6,0.89486 0.725426,1.6203 1.62029,1.6203 0.335058,2e-5 0.661882,-0.10383 0.93547,-0.29726 l -0.25191,-0.35634 c -0.19218,0.13827 -0.42258,0.22226 -0.66151,0.22279 -0.56601,0.0236 -0.661407,-0.70635 -0.64416,-1.18904 -0.01725,-0.57564 -0.13278,-1.16431 0.5507,-1.18687 0.0245,-7.6e-4 0.0491,-7.6e-4 0.0735,-7.4e-4 0.0735,7.7e-4 0.14693,0.008 0.219,0.0222 0.16984,0.0276 0.32761,0.0969 0.46467,0.19526 l 0.24969,-0.35317 c -0.273574,-0.19347 -0.600399,-0.29736 -0.93547,-0.29738 -0.0027,-10e-6 -0.0053,-10e-6 -0.008,0 z"
                />
              </g>
            </g>
            <g id="select_key" transform="translate(-0.72492081)">
              <path
                id="path963"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#4d4d4d",
                  strokeWidth: "0.396875",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 117.20951,112.64127 c 0,4.01844 -8.46724,9.72852 -18.696013,9.72852 -10.228773,0 -18.608421,-5.62249 -18.608423,-9.64093 2e-6,-4.01845 9.08036,-2.80902 19.309133,-2.80902 10.228773,0 17.995303,-1.29702 17.995303,2.72143 z"
              />
              <rect
                style={{
                  fill: "#40ff00",
                  fillOpacity: 1,
                  fillRule: "evenodd",
                  stroke: "#000",
                  strokeWidth: "0.15",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                id="rect966"
                width="9.260417"
                height="2.6458409"
                x="93.927086"
                y="112.44791"
                ry="1.3229204"
              />
            </g>
            <g
              id="key_numpad_2"
              transform="matrix(1.27818,0,0,1.2344399,71.587616,7.7088648)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path972"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                onClick={this.handlePhoneDown}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneDown();
                }}
                d="m 25.135417,127 c -3e-6,1.46125 -2.073017,3.43413 -4.630208,3.43413 -2.557191,0 -4.630206,-1.97288 -4.630209,-3.43413 3e-6,-1.46125 2.073018,-1.85753 4.630209,-1.85753 2.557191,0 4.630205,0.39628 4.630208,1.85753 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "3.52778px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.105318",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="19.179707"
                y="128.31383"
                id="text977"
                onClick={this.handlePhoneDown}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneDown();
                }}
              >
                <tspan
                  id="tspan975"
                  x="19.179707"
                  y="128.31383"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "3.52778px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    cursor: "pointer",
                  }}
                  onClick={this.handlePhoneDown}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    this.handlePhoneDown();
                  }}
                >
                  8
                </tspan>
              </text>
            </g>
            <g
              id="g990"
              transform="matrix(1.27818,0,0,1.2344399,71.587616,19.17439)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path984"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 25.135417,127 c -3e-6,1.46125 -2.073017,3.43413 -4.630208,3.43413 -2.557191,0 -4.630206,-1.97288 -4.630209,-3.43413 3e-6,-1.46125 2.073018,-1.85753 4.630209,-1.85753 2.557191,0 4.630205,0.39628 4.630208,1.85753 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "3.52778px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.105318",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="19.179707"
                y="128.31383"
                id="text988"
              >
                <tspan
                  id="tspan986"
                  x="19.179707"
                  y="128.31383"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "3.52778px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  0
                </tspan>
              </text>
            </g>
            <g
              id="g998"
              transform="matrix(1.27818,0,0,1.2344399,71.587616,-3.7566602)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path992"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 25.135417,127 c -3e-6,1.46125 -2.073017,3.43413 -4.630208,3.43413 -2.557191,0 -4.630206,-1.97288 -4.630209,-3.43413 3e-6,-1.46125 2.073018,-1.85753 4.630209,-1.85753 2.557191,0 4.630205,0.39628 4.630208,1.85753 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "3.52778px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.105318",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="19.179707"
                y="128.31383"
                id="text996"
              >
                <tspan
                  id="tspan994"
                  x="19.179707"
                  y="128.31383"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "3.52778px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  5
                </tspan>
              </text>
            </g>
            <g
              id="g1006"
              transform="matrix(1.27818,0,0,1.2344399,71.587616,-15.222185)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1000"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.264583",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                onClick={this.handlePhoneUp}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneUp();
                }}
                d="m 25.135417,127 c -3e-6,1.46125 -2.073017,3.43413 -4.630208,3.43413 -2.557191,0 -4.630206,-1.97288 -4.630209,-3.43413 3e-6,-1.46125 2.073018,-1.85753 4.630209,-1.85753 2.557191,0 4.630205,0.39628 4.630208,1.85753 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "3.52778px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.105318",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="19.179707"
                y="128.31383"
                id="text1004"
                onClick={this.handlePhoneUp}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneUp();
                }}
              >
                <tspan
                  id="tspan1002"
                  x="19.179707"
                  y="128.31383"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "3.52778px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    cursor: "pointer",
                  }}
                  onClick={this.handlePhoneUp}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    this.handlePhoneUp();
                  }}
                >
                  2
                </tspan>
              </text>
            </g>
            <g
              id="g1018"
              transform="translate(46.302084,14.111093)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1008"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                onClick={this.handlePhoneLeft}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneLeft();
                }}
                d="m 38.364583,137.58333 c 9e-6,2.04933 -2.756347,2.23658 -6.035263,2.23658 -3.278916,0 -5.83873,-1.26822 -5.838721,-3.31755 1e-6,-2.04933 0.103051,-3.61235 3.381964,-3.61235 3.278909,0 8.492018,2.64401 8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="30.164316"
                y="137.65276"
                id="text1013"
                onClick={this.handlePhoneLeft}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneLeft();
                }}
              >
                <tspan
                  id="tspan1011"
                  x="30.164316"
                  y="137.65276"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "4.23333px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    cursor: "pointer",
                  }}
                  onClick={this.handlePhoneLeft}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    this.handlePhoneLeft();
                  }}
                >
                  4
                </tspan>
              </text>
            </g>
            <g
              id="g1026"
              transform="translate(46.302084,37.04167)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1020"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 38.364583,137.58333 c 9e-6,2.04933 -2.756347,2.23658 -6.035263,2.23658 -3.278916,0 -5.83873,-1.26822 -5.838721,-3.31755 1e-6,-2.04933 0.103051,-3.61235 3.381964,-3.61235 3.278909,0 8.492018,2.64401 8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="30.164316"
                y="137.65276"
                id="text1024"
              >
                <tspan
                  id="tspan1022"
                  x="30.164316"
                  y="137.65276"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "4.23333px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  *
                </tspan>
              </text>
            </g>
            <g
              id="g1034"
              transform="translate(46.302084,25.576381)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1028"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 38.364583,137.58333 c 9e-6,2.04933 -2.756347,2.23658 -6.035263,2.23658 -3.278916,0 -5.83873,-1.26822 -5.838721,-3.31755 1e-6,-2.04933 0.103051,-3.61235 3.381964,-3.61235 3.278909,0 8.492018,2.64401 8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="30.164316"
                y="137.65276"
                id="text1032"
              >
                <tspan
                  id="tspan1030"
                  x="30.164316"
                  y="137.65276"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "4.23333px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  7
                </tspan>
              </text>
            </g>
            <g
              id="g1042"
              transform="translate(46.302084,2.6458043)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1036"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 38.364583,137.58333 c 9e-6,2.04933 -2.756347,2.23658 -6.035263,2.23658 -3.278916,0 -5.83873,-1.26822 -5.838721,-3.31755 1e-6,-2.04933 0.103051,-3.61235 3.381964,-3.61235 3.278909,0 8.492018,2.64401 8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fontVariantLigatures: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantEastAsian: "normal",
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="30.164316"
                y="137.65276"
                id="text1040"
              >
                <tspan
                  id="tspan1038"
                  x="30.164316"
                  y="137.65276"
                  style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontSize: "4.23333px",
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: '"sans-serif, Bold"',
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  1
                </tspan>
              </text>
            </g>
            <g
              id="g1092"
              transform="translate(84.634401,2.6458367)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1068"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 26.490599,137.58333 c -9e-6,2.04933 2.756347,2.23658 6.035263,2.23658 3.278916,0 5.83873,-1.26822 5.838721,-3.31755 -1e-6,-2.04933 -0.103051,-3.61235 -3.381964,-3.61235 -3.278909,0 -8.492018,2.64401 -8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontWeight: "bold",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="31.828503"
                y="137.39908"
                id="text1087"
              >
                <tspan
                  id="tspan1085"
                  x="31.828503"
                  y="137.39908"
                  style={{
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  3
                </tspan>
              </text>
            </g>
            <g
              id="g1100"
              transform="translate(84.634401,14.111125)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1094"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                onClick={this.handlePhoneRight}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneRight();
                }}
                d="m 26.490599,137.58333 c -9e-6,2.04933 2.756347,2.23658 6.035263,2.23658 3.278916,0 5.83873,-1.26822 5.838721,-3.31755 -1e-6,-2.04933 -0.103051,-3.61235 -3.381964,-3.61235 -3.278909,0 -8.492018,2.64401 -8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontWeight: "bold",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="31.828503"
                y="137.39908"
                id="text1098"
                onClick={this.handlePhoneRight}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  this.handlePhoneRight();
                }}
              >
                <tspan
                  id="tspan1096"
                  x="31.828503"
                  y="137.39908"
                  style={{
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    cursor: "pointer",
                  }}
                  onClick={this.handlePhoneRight}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    this.handlePhoneRight();
                  }}
                >
                  6
                </tspan>
              </text>
            </g>
            <g
              id="g1108"
              transform="translate(84.634401,25.576413)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1102"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 26.490599,137.58333 c -9e-6,2.04933 2.756347,2.23658 6.035263,2.23658 3.278916,0 5.83873,-1.26822 5.838721,-3.31755 -1e-6,-2.04933 -0.103051,-3.61235 -3.381964,-3.61235 -3.278909,0 -8.492018,2.64401 -8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontWeight: "bold",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="31.828503"
                y="137.39908"
                id="text1106"
              >
                <tspan
                  id="tspan1104"
                  x="31.828503"
                  y="137.39908"
                  style={{
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  9
                </tspan>
              </text>
            </g>
            <g
              id="g1116"
              transform="translate(84.634401,37.041702)"
              style={{ stroke: "#333333" }}
            >
              <path
                id="path1110"
                style={{
                  fill: "#b3b3b3",
                  fillOpacity: 1,
                  stroke: "#333333",
                  strokeWidth: "0.296849",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                d="m 26.490599,137.58333 c -9e-6,2.04933 2.756347,2.23658 6.035263,2.23658 3.278916,0 5.83873,-1.26822 5.838721,-3.31755 -1e-6,-2.04933 -0.103051,-3.61235 -3.381964,-3.61235 -3.278909,0 -8.492018,2.64401 -8.49202,4.69332 z"
              />
              <text
                xmlSpace="preserve"
                style={{
                  fontWeight: "bold",
                  fontSize: "4.23333px",
                  lineHeight: "1.25",
                  fontFamily: "sans-serif",
                  InkscapeFontSpecification: '"sans-serif, Bold"',
                  fill: "#46cd35",
                  fillOpacity: 1,
                  stroke: "#ffffff",
                  strokeWidth: "0.132292",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                }}
                x="31.828503"
                y="137.39908"
                id="text1114"
              >
                <tspan
                  id="tspan1112"
                  x="31.828503"
                  y="137.39908"
                  style={{
                    fill: "#40ff00",
                    fillOpacity: 1,
                    stroke: "#000",
                    strokeWidth: "0.1",
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                  }}
                >
                  #
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
    );

    let phone = (
      <div className="updown">
        <button
          className="buttonset-up"
          onClick={this.handlePhoneUp}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handlePhoneUp();
          }}
        />
        <button
          className="buttonset-down"
          onClick={this.handlePhoneDown}
          onTouchEnd={(e) => {
            e.preventDefault();
            this.handlePhoneDown();
          }}
        />
      </div>
    );

    let controls =
      this.state.consoleType === CONSOLE_GAMEBOY
        ? gameboyControls
        : phoneControls;
    let screenClass =
      this.state.consoleType === CONSOLE_GAMEBOY
        ? "console-screen"
        : "console-screen phone";
    return (
      <GlobalConsumer>
        {(globalContextProps) => {
          return (
            <div className={"game-console " + globalContextProps.theme}>
              <div className={screenClass}>
                <SnakeGame ref={this.snakeGame} />
              </div>
              {controls}
              <div id="snake-score" className="snake-score">
                Score: 0
              </div>
              <div className="note">
                Slow? Turn off the power saver mode!
              </div>
            </div>
          );
        }}
      </GlobalConsumer>
    );
  }
}
