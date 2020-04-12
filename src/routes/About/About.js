import React from "react";
import "./About.scss";
import TimelineItem from "../../components/Timeline-Item/Timeline-Item"

export default function About() {
  return (
    <div className="about-component">
      <h2>About</h2>
      <div className="about">
        <div className="intro">
          <div className="intro__title"></div>
          <div className="intro__text"></div>
        </div>
        <div  className="picture"></div>
      </div>
      <h2>Timeline</h2>
      <div className="timeline">
        <TimelineItem/>
        <TimelineItem/>
        <TimelineItem/>
        {/* <div className="connector"></div> */}
      </div>
    </div>
  );
}
