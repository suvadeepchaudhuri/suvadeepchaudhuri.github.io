import React from "react";
import { GlobalConsumer } from "../../context-stores/global-store";
import "./Resources.scss";

export default function Resources() {
  return (
    <GlobalConsumer>
      {(globalContextProps) => {
        return (
          <div className={"resources " + globalContextProps.theme}>
              This space will soon be updated with interesting things like blog posts, sports results, travel plans and games. But till then, enjoy the rest. <br/> -The Architect
          </div>
        );
      }}
    </GlobalConsumer>
  );
}
