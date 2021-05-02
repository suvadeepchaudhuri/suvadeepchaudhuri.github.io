import React from "react";
import "./Skills.scss";
import { resume } from "./resume";
import { GlobalConsumer } from "../../context-stores/global-store";
import moment from "moment";
import Mark from "mark.js";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.clickSkill = this.clickSkill.bind(this);
  }
  clickSkill(skillName) {
    this.searchAndHighlight(skillName);
    // TODO: Convert to button if using onClick
  }

  componentDidMount() {
    this.markInstance = new Mark(
      document.querySelectorAll(".project-skills , .workex")
    );
  }

  markInstance;

  searchAndHighlight(text) {
    const searchOptions = {
      debug: false,
      diacritics: false,
      separateWordSearch: true,
    };

    // Remove previous marked elements and mark
    // the new keyword inside the context
    let _this = this;
    this.markInstance.unmark({
      done: function () {
        _this.markInstance.mark(text, searchOptions);
        let markers = document.getElementsByTagName("mark");
        if (markers.length && markers[0]) {
          window.scrollTo({
            top: markers[0].offsetTop,
            left: 0,
            behavior: "smooth",
          });
        }
      },
    });
  }

  render() {
    return (
      <GlobalConsumer>
        {(globalContextProps) => {
          return (
            <div className={"work " + globalContextProps.theme}>
              {/* Skills */}
              <div className={"skills " + globalContextProps.theme}>
                <div className="block-title">Skills</div>
                {resume.skills.map((element) => (
                  <div className="skills__section">
                    <div className="section-title">{element.sectiontitle}</div>
                    <div className="skills-container">
                      {element.items.map((item) => (
                        <button
                          role="button"
                          className="skill-pill"
                          onClick={(e) => {
                            if (item.name.length > 1) {
                              this.clickSkill(item.name);
                            }
                          }}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />

              {/* Work Experience */}
              <div className={"workex " + globalContextProps.theme}>
                <div className="block-title">Work Experience</div>
                {resume.workexperience.map((element) => (
                  <div className="workex__section">
                    <div className="section-title">
                      <span className="work-title">{element.title}</span> &nbsp;
                      (<span className="work-org">{element.organization}</span>)
                      <br />
                      <span className="work-date">
                        {moment(element.start).format("MMMM YYYY")} -{" "}
                        {moment(element.end).isValid()
                          ? moment(element.end).format("MMMM YYYY")
                          : element.end}
                      </span>
                    </div>
                    <div className="work-summary">{element.summary}</div>
                    <ul className="work-highlights">
                      {element.highlights.map((highlight) => (
                        <li>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className={"project " + globalContextProps.theme}>
                <div className="block-title">Projects</div>
                {resume.projects.map((element) => (
                  <div className="project__section">
                    <div className="section-title">
                      <span className="project-title">{element.title}</span>{" "}
                      &nbsp; (
                      <span className="project-org">
                        {element.organization}
                      </span>
                      )
                      <br />
                      <span className="project-date">
                        {moment(element.end).isValid()
                          ? moment(element.end).format("MMMM YYYY")
                          : element.end}
                      </span>
                    </div>
                    <div className="project-summary">{element.summary}</div>
                    <ul className="project-highlights">
                      {element.highlights.map((highlight) => (
                        <li>{highlight}</li>
                      ))}
                      <li className="project-skills">{element.skills}</li>
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className={"edu " + globalContextProps.theme}>
                <div className="block-title">Education</div>
                {resume.education.map((element) => (
                  <div className="edu__section">
                    <div className="section-title">
                      <span className="edu-title">{element.degree}</span> &nbsp;
                      (<span className="edu-major">{element.major}</span>)
                      <br />
                      <span className="edu-org">{element.school}</span>
                      <br />
                      <span className="edu-date">
                        {moment(element.start).format("MMMM YYYY")} -{" "}
                        {moment(element.end).isValid()
                          ? moment(element.end).format("MMMM YYYY")
                          : element.end}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/suvadeepchaudhuri/MyResume/raw/master/Suvadeep_OPR_RJ.pdf"
                target="_blank"
                rel="noopener noreferrer" 
                download="Suvadeep_OPR_RJ.pdf"
                className="download-resume"
                alt="Download Resume"
                title="Download Resume"
              >
              </a> Download Resume
            </div>
          );
        }}
      </GlobalConsumer>
    );
  }
}
