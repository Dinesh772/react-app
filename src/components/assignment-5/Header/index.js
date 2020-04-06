import React from "react";
import {Header,H1,Nav,P,Button} from './StyledComponents'
function Navbar(props) {
  const text = props.theme === "light" ? "Dark" : "Light";
  return (
    <Header theme={props.theme}>
      <div className="flex  ">
        <H1>Emoji Game</H1>
        <Nav>
          <div className=" flex flex-wrap items-center  sm:flex sm:justify-center ">
            <P>
              Score: <span className="text-xl">{props.currentScore}</span>
            </P>
            <P>
              Top Score: <span className="text-xl">{props.highScore}</span>
            </P>
          </div>
          <Button theme={props.theme} onClick={props.onChangeTheme}>
            {text.toUpperCase()} THEME
          </Button>
        </Nav>
      </div>
    </Header>
  );
}
export default Navbar;