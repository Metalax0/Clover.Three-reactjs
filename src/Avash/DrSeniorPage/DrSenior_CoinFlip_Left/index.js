import { useState } from 'react';

const DrSeniorCoinFlipLeft = () => {

    const [flipdetails, setFlipdetails] = useState({
        randomnumber: Math.floor(Math.random() * 2) + 1,
        flipcount: 0,
        headcount: 0,
        tailcount: 0,
        headpercent: 0,
        tailpercent: 0,
        result: <p>JUST <span className="heading-color">FL</span>IP</p>,
    });

    const handleToss = () => {
        var randomnum = flipdetails.randomnumber;
        
        if (randomnum === 1) {
            var hc = flipdetails.headcount + 1;
            var total = hc + flipdetails.tailcount;
            var hp = ((hc / total) * 100).toPrecision(3);
            var tp = ((flipdetails.tailcount / total) * 100).toPrecision(3);
            setFlipdetails({
                randomnumber: Math.floor(Math.random() * 2) + 1,
                flipcount: flipdetails.flipcount + 1,
                headcount: hc,
                tailcount: flipdetails.tailcount,
                headpercent: hp,
                tailpercent: tp,
                result: "Heads!"
            }
            );
        } else {
            var  tc = flipdetails.tailcount + 1;
            total = tc + flipdetails.headcount;
            tp = ((tc / total) * 100).toPrecision(3);
            hp = ((flipdetails.headcount / total) * 100).toPrecision(3);
            setFlipdetails({
                randomnumber: Math.floor(Math.random() * 2) + 1,
                flipcount: flipdetails.flipcount + 1,
                headcount: flipdetails.headcount,
                tailcount: tc,
                headpercent: hp,
                tailpercent: tp,
                result: "Tails!"
            }
            );
        }
    }

    return (
        <>
            {/* Bottom Left Container */}
            <div className="botton-left-container">

                <div className="coinflipresult">
                    {flipdetails.result}
                </div>

                <div className="headandtailcount">
                    <div className="counts">
                        <p>Heads:</p>
                        <p> {flipdetails.headcount} </p>

                        <p>Tails:</p>
                        <p> {flipdetails.tailcount} </p>
                    </div>

                    <div className="percents">
                        <p>({flipdetails.headpercent}%)</p>
                        <p>({flipdetails.tailpercent}%)</p>
                    </div>

                    <div className="totalflips">
                        <p>Total Flips:</p>
                        <p> {flipdetails.flipcount} </p>
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