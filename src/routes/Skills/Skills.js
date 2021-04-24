import React from "react";
import "./Skills.scss";
import { resume } from "./resume";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { GlobalConsumer } from "../../context-stores/global-store";

export default class Skills extends React.Component {
  clickSkill() { }

  render() {
    return (
      <GlobalConsumer>
        {(globalContextProps) => {
          return (
            <div className={"skills " + globalContextProps.theme}>
              {resume.skills.map((element) => (
                <div className="skills__section">
                  <div className="section-title">{element.sectiontitle}</div>
                  <div className="skills-container">
                    {element.items.map((item) => (
                      <div className="skill-pill">
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </GlobalConsumer>

    );
  }
}
