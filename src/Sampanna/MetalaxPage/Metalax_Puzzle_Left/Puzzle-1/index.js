const Puzzle_1 = () => {
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
      />
      <label className="puzzle-note">
        {" "}
        <b>NOTE : </b> Decypher the code to reveal the answer
      </label>
    </div>
  );
};

export default Puzzle_1;
