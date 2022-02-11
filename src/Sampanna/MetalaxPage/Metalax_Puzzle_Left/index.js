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
    bttnClassName: "checkAnswer",
    containerClassName: "column-left",
  });

  var puzzleToRender = [
    <Puzzle1 changeState={setpuzzleDetails} PuzzleDetails={puzzleDetails} />,
    <Puzzle2 changeState={setpuzzleDetails} PuzzleDetails={puzzleDetails} />,
    <Puzzle3 changeState={setpuzzleDetails} PuzzleDetails={puzzleDetails} />,
  ];

  function bttnPrevPuzzle() {
    if (puzzleDetails.puzzleID === 2) {
      index = 1;
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
        bttnClassName: "checkAnswer",
        containerClassName: "column-left",
      });
    } else {
      index = 0;
      setpuzzleDetails({
        puzzleID: index,
        puzzleAns: puzzleDetails.puzzleAns,
        ansStatus: "default",
        bttnClassName: "checkAnswer",
        containerClassName: "column-left",
      });
    }
  }

  function bttnNextPuzzle() {
    if (puzzleDetails.puzzleID === 0) {
      if (puzzleDetails.ansStatus === "correct") {
        index = 1;
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "default",
          bttnClassName: "checkAnswer",
          containerClassName: "column-left",
        });
      }
    } else {
      if (puzzleDetails.ansStatus === "correct") {
        index = 2;
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "default",
          bttnClassName: "checkAnswer",
          containerClassName: "column-left",
        });
      }
    }
  }

  function bttnCheckAns() {
    //Checking ans
    if (puzzleDetails.puzzleID === 0) {
      if (puzzleDetails.puzzleAns.toUpperCase() === "NO PRESSURE NO DIAMONDS") {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "correct",
          bttnClassName: "checkAnswer " + "bttnCorrectAns",
          containerClassName: "column-left " + "containerCorrectAns",
        });
      } else {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "incorrect",
          bttnClassName: "checkAnswer " + "bttnIncorrectAns",
          containerClassName: "column-left " + "containerIncorrectAns",
        });
      }
    } else if (puzzleDetails.puzzleID === 1) {
      if (puzzleDetails.puzzleAns.toUpperCase() === "ALAN TURING") {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "correct",
          bttnClassName: "checkAnswer " + "bttnCorrectAns",
          containerClassName: "column-left " + "containerCorrectAns",
        });
      } else {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "incorrect",
          bttnClassName: "checkAnswer " + "bttnIncorrectAns",
          containerClassName: "column-left " + "containerIncorrectAns",
        });;
      }
    } else if (puzzleDetails.puzzleID === 2) {
      if (
        puzzleDetails.puzzleAns.toUpperCase() ===
        "CONGRATS YOU FOUND THE ANSWER"
      ) {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "correct",
          bttnClassName: "checkAnswer " + "bttnCorrectAns",
          containerClassName: "column-left " + "containerCorrectAns",
        });
      } else {
        setpuzzleDetails({
          puzzleID: index,
          puzzleAns: puzzleDetails.puzzleAns,
          ansStatus: "incorrect",
          bttnClassName: "checkAnswer " + "bttnIncorrectAns",
          containerClassName: "column-left " + "containerIncorrectAns",
        });
      }
    }

    //Change column left and button background color (green,red)
  }

  return (
    // Left Column Container
    <div
      className={puzzleDetails.containerClassName}
      id = "Metalax-Puzzle-column-left"
    >
      <div id="puzzle-container">{puzzleToRender[index]}</div>

      <div id="puzzle-button-container">
        <button className="puzzlePrevious" onClick={() => bttnPrevPuzzle()}>
          {"<<"}
        </button>

        <button
          className={puzzleDetails.bttnClassName}
          onClick={() => bttnCheckAns()}
        >
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
