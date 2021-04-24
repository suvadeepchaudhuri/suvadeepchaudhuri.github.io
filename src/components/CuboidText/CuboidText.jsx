import "./CuboidText.scss";
import React, { useEffect } from "react";

export default function CuboidText(props) {
  let frontTerm,
    backTerm,
    topTerm,
    bottomTerm = "";
  if (props.terms && props.terms.length === 4) {
    frontTerm = props.terms[0];
    backTerm = props.terms[1];
    topTerm = props.terms[2];
    bottomTerm = props.terms[3];
  }
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">{frontTerm}</div>
        <div className="cube__face cube__face--back">{backTerm}</div>
        <div className="cube__face cube__face--top">{topTerm}</div>
        <div className
        ="cube__face cube__face--bottom">{bottomTerm}</div>
      </div>
    </div>
  );
}
