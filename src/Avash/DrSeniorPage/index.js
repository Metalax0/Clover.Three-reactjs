import DrSeniorWCounterLeft from "./DrSenior_WCounter_Left";
import DrSeniorWCounterRight from "./DrSenior_WCounter_Right";
import "../../index.css";
import DrSeniorCoinFlipLeft from "./DrSenior_CoinFlip_Left";
import DrSeniorCoinFlipRight from "./DrSenior_CoinFlip_Right";
import MainContainer from "../../Sampanna/MainContainer";

const DrSeniorPage = () => {
    return (
        <>
            <MainContainer left_content={<DrSeniorWCounterLeft />} right_content={<DrSeniorWCounterRight />} />
            <MainContainer left_content={<DrSeniorCoinFlipLeft />} right_content={<DrSeniorCoinFlipRight />} />
        </>
    );
}

export default DrSeniorPage;