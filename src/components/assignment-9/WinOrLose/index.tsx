import React from "react";
import { gridStore } from "../../../stores/GridStore";
class  WinOrLoose extends React.Component {
 
  handleClick=()=>{
    gridStore.onPlayAgainClicked()
  }
  render(){
  return (
    <div
      className={`w-full  text-white text-center text-2xl p-24 flex justify-center items-center flex-col ${
        gridStore.theme === "Light" ? "bg-indigo-100" : "bg-gray-900"}transition:all .8s;`} 
    >
      <p
        className={`text-4xl font-bold ${
          gridStore.theme === "Light" ? "text-blue-900" : "text-white"
        }`}
      >
        {gridStore.currentLevel}
      </p>
      <p
        className={
          "font-bold py-3 text-3xl " +
          (gridStore.gameStatus==='won' ? "text-green-500" : "text-red-500")
        }
      >
        {gridStore.gameStatus==='won'?'Congratulations! you have complete all levels.':'You Lost!'}
      </p>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded"
        onClick={this.handleClick}
      >
        Play Again
      </button>
    </div>
  );}
}

export default WinOrLoose;
