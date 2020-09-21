import React from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import Monitor from "../../components/Monitor/Monitor";
import System from "../../components/System/System";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      {/* <h2>Home</h2> */}
      <System/>
      {/* <Monitor/>
      <Keyboard/> */}
    </div>
  );
}
