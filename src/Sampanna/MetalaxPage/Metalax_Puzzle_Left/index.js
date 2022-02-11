import { useState } from "react";
import Puzzle1 from "./Puzzle-1";
import Puzzle2 from "./Puzzle-2";
import Puzzle3 from "./Puzzle-3";

var index = 0;
const MetalaxPuzzleLeft = () => {
  const [puzzleDetails, setpuzzleDetails] = useState({
    puzzleID: index,
    puzzleAns: "",
    ansStatus: "default", // default, correct, incorrect
  });

  var puzzleToRender = [<Puzzle1 changeState = {setpuzzleDetails} PuzzleDetails = {puzzleDetails}/>, <Puzzle2 />, <Puzzle3 />]

  function bttnPrevPuzzle() {
    if (puzzleDetails.puzzleID === 2) {
      index = 1
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
      });
    } else {
      index = 0;
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
      });
    }
  }

  function bttnNextPuzzle() {
    if (puzzleDetails.puzzleID === 0) {
      index = 1;
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
      });
    } else {
      index = 2;
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
      });
    }
  }

  function bttnCheckAns() {
    // ans : "NO PRESSURE NO DIAMONDS"
    // ans : "ALAN TURING"
    // ans : "CONGRATS YOU FOUND THE ANSWER"
    //Check ans
    //Change column left and button background color (green,red)
  }

  return (
    // Left Column Container
    <div className="column-left" id="Metalax-Puzzle-column-left">
      <div id="puzzle-container">{puzzleToRender[index]}</div>

      <div id="puzzle-button-container">
        <button className="puzzlePrevious" onClick={() => bttnPrevPuzzle()}>
          {"<<"}
        </button>

        <button className="checkAnswer" onClick={() => bttnCheckAns()}>
          CheckAnswer
        </button>

        <button className="puzzleNext" onClick={() => bttnNextPuzzle()}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default MetalaxPuzzleLeft;
