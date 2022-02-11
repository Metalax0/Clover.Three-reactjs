const Puzzle_2 = ({ changeState, PuzzleDetails }) => {
  return (
    // Puzzle 2
    <div id="puzzle2" className="puzzle">
      <label className="puzzle-heading">2.Icosikaihexagon</label>
      <div className="puzzle-text">
        <b>
          <i>HINT: </i>
        </b>
        M {"     "}
        {"     "} @ {"     "}
        {"     "} # {"     "}
        {"     "} T {"     "}
        {"     "} 1 {"     "}
        {"     "} H {"     "}
        {"     "} ) {"     "}
        {"     "} {">"} {"     "}
        {"     "} / {"     "}
        {"     "} J {"     "}
        {"     "} K {"     "} <br />
        {"     "} {"&"} {"     "}
        {"     "} V {"<"} {"     "}
        {"     "} B {"     "}
        {"     "} $ {"     "}
        {"     "} _ {"     "}
        {"     "} Y {"     "}
        {"     "} * {"     "}
        {"     "} U {"     "}
        {"     "} E {"     "}
        {"     "} ? {"     "}
        {"     "} C {"     "}
        {"     "} + {"     "}
        {"     "} G {"     "}
        {"     "} =
      </div>

      <div className="puzzle-text">
        <b>Question :</b> {"HMU>1Y BH #BV$EU1Y *#/1&lt#1"}
      </div>

      <input
        className="puzzle-answer"
        type="text"
        placeholder="Write Your Answer Here"
        onChange={(value) => {
          PuzzleDetails.puzzleAns = value.target.value;
          changeState({
            puzzleID: 1,
            puzzleAns: value.target.value,
            ansStatus: "default",
            bttnClassName: "checkAnswer",
            containerClassName: "column-left",
          });
        }}
        value={PuzzleDetails.puzzleAns}
      />
    </div>
  );
};

export default Puzzle_2;
