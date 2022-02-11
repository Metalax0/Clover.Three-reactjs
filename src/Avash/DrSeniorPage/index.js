import DrSeniorWCounterLeft from "./DrSenior_WCounter_Left";
import DrSeniorWCounterRight from "./DrSenior_WCounter_Right";
import "../../index.css";
import DrSeniorCoinFlipLeft from "./DrSenior_CoinFlip_Left";
import DrSeniorCoinFlipRight from "./DrSenior_CoinFlip_Right";

const DrSeniorPage = () => {
    return (
        <>
            <div className="Main-Container">
                <DrSeniorWCounterLeft />
                <DrSeniorWCounterRight />
            </div>

            <div className="Main-Container">
                <DrSeniorCoinFlipLeft />
                <DrSeniorCoinFlipRight />
            </div>

        </>
    );
}

export default DrSeniorPage;