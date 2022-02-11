const Puzzle_3 = ({ changeState, PuzzleDetails }) => {
  return (
    // Puzzle 3
    <div id="puzzle3" className="puzzle">
      <label className="puzzle-heading">3.Columnar Transposition</label>
      <div className="puzzle-text">
        <b>Code :</b> shuoacwenutoe_d_snra_f_g_ntoyr
      </div>

      <input
        className="puzzle-answer"
        type="text"
        placeholder="Write Your Answer Here"
        onChange={(value) => {
          PuzzleDetails.puzzleAns = value.target.value;
          changeState({
            puzzleID: 2,
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
        <b>NOTE : </b> Key : 6x5, starts from row 6 (upwards)
      </label>
    </div>
  );
};

export default Puzzle_3;
