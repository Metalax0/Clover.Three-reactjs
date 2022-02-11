import "../index.css";
import { useState } from 'react';

const DrSeniorWCounterRight = () => {

    const [letterscount, setLetterscount] = useState(0);
    const [wordscount, setWordsscount] = useState(0);
    const [sentencescount, setSentencescount] = useState(0);

    const handleCount = (e) => {
        try {
            setLetterscount(e.target.value.match(/\w/g).length);
            setWordsscount(e.target.value.match(/\w+/g).length);
            setSentencescount((e.target.value.split(". ").length) - 1);
        } catch (error) {
            setLetterscount(0);
            setWordsscount(0);
            setSentencescount(0);
        }
    }

    return (
        <>
            {/* Right Container: Textarea to input the words   */}
            <div className="flex-item-right">
                <label>
                    <textarea onChange={handleCount} placeholder="Enter a text..."></textarea>
                </label>

                <div className="displayresult">
                    <p>Letters</p>
                    <p>Words</p>
                    <p>Sentences</p>
                </div>

                <div className="result">
                    <p>{letterscount}</p>
                    <p>{wordscount}</p>
                    <p>{sentencescount}</p>
                </div>
            </div >
        </>
    );
}

export default DrSeniorWCounterRight;