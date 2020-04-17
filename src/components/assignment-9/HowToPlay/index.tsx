import React from "react";
import { gridStore } from "../../../stores/GridStore";

function HowToPlay() {
  const theme=gridStore.theme
  return (
    <div
      className={`w-full px-4  ${
        theme === "Light" ? "bg-white" : "bg-gray-700 text-white"
      }`}
    >
      <h2 className="text-2xl  font-bold">How to play?</h2>
      <p className=" pl-4 text-lg">
        1. Click on the correct boxes that appear on the screen.
        
      </p>
      <p className=" pl-4 pb-4 text-lg">
      2. Select correct boxes & move to Next level. 
      </p>
     
    </div>
  );
}

export default HowToPlay;
