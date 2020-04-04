import React from "react";
import {Header,H1,Nav} from './Styles'
function Navbar(props) {
  const text = props.theme === "light" ? "Dark" : "Light";
  return (
    <Header theme={props.theme}>
      <div className="flex  ">
        <H1>Emoji Game</H1>
        <Nav>
          <div className=" flex flex-wrap items-center">
            <p className="font-bold mx-3">
              Score: <span className="text-xl">{props.currentScore}</span>
            </p>
            <p className="font-bold mx-3">
              Top Score: <span className="text-xl">{props.highScore}</span>
            </p>
          </div>
          <button onClick={props.onChangeTheme} className={"border border-solid p-2 ml-3 focus:outline-none cursor-default " +(props.theme === "dark" ? "border-white" : "border-black")}>
            {text.toUpperCase()} THEME
          </button>
        </Nav>
      </div>
    </Header>
  );
}
export default Navbar;