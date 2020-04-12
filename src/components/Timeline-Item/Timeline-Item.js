import React from "react";
import "./Timeline-Item.scss";

class TimelineItem extends React.Component {
    render() {
      return <div className="item">
          <div className="time-point"></div>
          <span className="time-point__link"></span>
          <div className="time-story">Sample item</div>
      </div>
      ;
    }
  }

  export default TimelineItem;