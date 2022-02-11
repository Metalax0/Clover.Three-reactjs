import { useState } from 'react';

const DrSeniorCoinFlipLeft = () => {

    const [flipcount, setFlipcount] = useState(0);
    const [headcount, setHeadcount] = useState(0);
    const [tailcount, setTailcount] = useState(0);
    const [result, setResult] = useState(<p>JUST <span className="heading-color">FL</span>IP</p>);
    const [headpercent, setHeadpercent] = useState("0");
    const [tailpercent, setTailpercent] = useState("0");

    const handleToss = () => {
        let randomNumber = Math.floor(Math.random() * 2) + 1;

        if (randomNumber === 1) {
            setResult("Heads!");
            setHeadcount(headcount + 1);
        } else {
            setResult("Tails!");
            setTailcount(tailcount + 1);
        }

        setFlipcount(flipcount + 1);

        setHeadpercent(((headcount/flipcount) * 100).toPrecision(3));

        setTailpercent(((tailcount/flipcount) * 100).toPrecision(3));
    }

    return (
        <>
            {/* Bottom Left Container */}
            <div className="botton-left-container">

                <div className="coinflipresult">
                    {result}
                </div>

                <div className="headandtailcount">
                    <div className="counts">
                        <p>Heads:</p>
                        <p> {headcount} </p>

                        <p>Tails:</p>
                        <p> {tailcount} </p>
                    </div>

                    <div className="percents">
                        <p>({headpercent}%)</p>
                        <p>({tailpercent}%)</p>
                    </div>

                    <div className="totalflips">
                        <p>Total Flips:</p>
                        <p> {flipcount} </p>
                    </div>
                </div>

                <div className="btndiv">
                    <button onClick={handleToss} >FLIP IT</button>
                </div>

            </div>
        </>
    );
}

export default DrSeniorCoinFlipLeft;