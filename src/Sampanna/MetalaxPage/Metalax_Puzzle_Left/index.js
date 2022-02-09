const MetalaxPuzzleLeft = () => {
    return(
        // Left Column Container
        <div className="column-left" id ='Metalax-Puzzle-column-left'>
            <div id="puzzle-container">
                {/* Puzzle 1 */}
                <div id = "puzzle1" className="puzzle">
                    <label className = "puzzle-heading">1.Julius Caesar</label>
                    <div className="puzzle-text">
                        <b>Code :</b>  op qsfttvsf op ejbnpoet
                    </div>

                    <input className="puzzle-answer" type="text" placeholder="Write Your Answer Here" /> 
                    <label className="puzzle-note"> <b>NOTE : </b> Decypher the code to reveal the answer</label>
                </div>

                {/* Puzzle 2 */}
                <div id = "puzzle2" className="puzzle">
                    <label className = "puzzle-heading">2.Icosikaihexagon</label>
                    <div className="puzzle-text">
                        {/* M &nbsp&nbsp @ &nbsp&nbsp # &nbsp&nbsp T &nbsp&nbsp 1 &nbsp&nbsp H &nbsp&nbsp ) &nbsp&nbsp > &nbsp&nbsp / &nbsp&nbsp J
                        &nbsp&nbsp K &nbsp&nbsp & &nbsp&nbsp V
                        <br />
                        < &nbsp&nbsp B &nbsp&nbsp $ &nbsp&nbsp _ &nbsp&nbsp Y &nbsp&nbsp * &nbsp&nbsp U &nbsp&nbsp E &nbsp&nbsp ? &nbsp&nbsp C &nbsp&nbsp + &nbsp&nbsp G &nbsp&nbsp = */}
                    </div>

                    <div className="puzzle-text">
                        <b>Question :</b>  {"HMU>1Y BH #BV$EU1Y *#/1&lt#1"}
                    </div>

                    <input className="puzzle-answer" type="text" placeholder="Write Your Answer Here" /> 
                    <label className="puzzle-note"> <b>NOTE : </b> Decypher the question and answer it.</label>
                </div>

                {/*s Puzzle 3 */}
                <div id = "puzzle3" className="puzzle">
                    <label className = "puzzle-heading">3.Columnar Transposition</label>
                    <div className="puzzle-text">
                        <b>Code :</b>  shuoacwenutoe_d_snra_f_g_ntoyr
                    </div>

                    <input className="puzzle-answer" type="text" placeholder="Write Your Answer Here" /> 
                    <label className="puzzle-note"> <b>NOTE : </b> Key : 6x5, starts from row 6 (upwards)</label>
                </div>
            </div>

            <div id="puzzle-button-container">
                <button className="puzzlePrevious" onClick="previousPuzzle()">
                    {"<<"}
                </button>

                <button className="checkAnswer" onClick="checkAnswer()">
                    Check Answer
                </button>

                <button className="puzzleNext" onClick="nextPuzzle()">
                    {">>"}
                </button>
            </div>
        </div> 
    );
}

export default MetalaxPuzzleLeft;