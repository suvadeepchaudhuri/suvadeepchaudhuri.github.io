import React from "react";
import "./Skills.scss";
import { resume } from "./resume";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

export default class Skills extends React.Component {
  clickSkill() {}

  render() {
    return (
      <div>
        <div className="skills">
          {resume.skills.map((element) => (
            <div className="skills__section">
              <div className="section-title">{element.sectiontitle}</div>
              <div className="skills-container">
                {element.items.map((item) => (
                  <Chip
                    avatar={<Avatar>{item.name.charAt(0)}</Avatar>}
                    label={item.name}
                    onClick={this.clickSkill}
                    className="skill-pill"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
