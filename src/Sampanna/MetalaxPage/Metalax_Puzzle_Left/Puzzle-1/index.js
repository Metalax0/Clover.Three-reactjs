const Puzzle_1 = ({ changeState, PuzzleDetails }) => {
  return (
    // Puzzle 1
    <div id="puzzle1" className="puzzle">
      <label className="puzzle-heading">1.Julius Caesar</label>
      <div className="puzzle-text">
        <b>Code :</b> op qsfttvsf op ejbnpoet
      </div>

      <input
        className="puzzle-answer"
        type="text"
        placeholder="Write Your Answer Here"
        onChange={(value) => {
          PuzzleDetails.puzzleAns = value.target.value;
          changeState({
            puzzleID: 0,
            puzzleAns: value.target.value,
            ansStatus: "default",
            bttnClassName: "checkAnswer",
            containerClassName: "column-left",
          });
        }}
        value={PuzzleDetails.puzzleAns}
      />
      <label className="puzzle-note">
        {" "}
        <b>NOTE : </b> Decypher the code to reveal the answer
      </label>
    </div>
  );
};

export default Puzzle_1;
