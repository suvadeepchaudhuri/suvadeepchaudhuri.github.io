import React from "react";
import "./About.scss";
import { GlobalConsumer } from "../../context-stores/global-store";

export default function About() {
  return (
    <GlobalConsumer>
      {(globalContextProps) => {
        return (
          <div className={"about " + globalContextProps.theme}>
            <div className="heading">what I do</div>
            <div className="about-section">
              <div className="intro">
                <div className="intro__title">
                  Suvadeep Chaudhuri currently develops really cool software for{" "}
                  <a href="https://www.gallup.com" target="_blank" rel="noopener noreferrer">
                    Gallup
                  </a>{" "}
                  and is making the{" "}
                  <a href="https://www.gallup.com/access" target="_blank" rel="noopener noreferrer">
                    Gallup Access
                  </a>{" "}
                  platform better than ever.
                </div>
                <div className="intro__text">
                  When not thinking about Gallup, Suvadeep likes to explore
                  everything new there is in tech. You'll often find him
                  tinkering with new tools, building something cool or attending
                  workshops.
                  <br />
                  <br />
                  Outside of tech, he loves football (soccer) and follows the top
                  European football leagues.
                  <br />
                  <br />
                  He's passionate about motor racing and catches most of the
                  MotoGP and F1 races early on raceday (Sunday mornings).
                  <br />
                  <br />
                  He also loves cooking and can be found in the kitchen
                  experimenting with new breads, bakes and recipes, and taking
                  insta-worthy pictures of his creations.
                  <br />
                  <br />
                  If you don't find him cooking, karting or motorcycling, you'll
                  probably find him in a plane on his next adventure, or camping
                  in Yellowstone, or hiking in Black Hills National forest.
                </div>
              </div>
              <div className="images">
                <div className="profile-image">
                  <img
                    alt="Profile Picture"
                    src={process.env.PUBLIC_URL + "/assets/prof_m.jpg"}
                  />
                </div>
                <div className={"connect "+ globalContextProps.theme}>
                  <a className="linkedin connect-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/suvadeepchaudhuri" aria-label="Connect on LinkedIn" title="Connect on LinkedIn"></a>
                  <a className="insta connect-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/suvadeepchaudhuri" aria-label="Connect on Instagram" title="Connect on Instagram"></a>
                  <a className="facebook connect-icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/suvadeep.chaudhuri" aria-label="Connect on Facebook" title="Connect on Facebook"></a>
                  <a className="twitter connect-icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/suvadeepch" aria-label="Connect on Twitter" title="Connect on Twitter"></a>
                  <a className="mail connect-icon" target="_blank" rel="noopener noreferrer" href="mailto:suvadeep.1905@gmail.com" aria-label="Connect via email" title="Connect via email"></a>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </GlobalConsumer>
  );
}
