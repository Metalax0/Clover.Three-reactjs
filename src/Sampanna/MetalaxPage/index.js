import MainContainer from '../MainContainer';
import MetalaxToDoLeft from "./Metalax_TODO_Left";
import MetalaxToDoRight from "./Metalax_TODO_Right";
import MetalaxPuzzleLeft from "./Metalax_Puzzle_Left";
import MetalaxPuzzleRight from "./Metalax_Puzzle_Right";
import "./index.css";

const MetalaxPage = () => {
    return(
        <>
        <MainContainer left_content = {<MetalaxToDoLeft />} right_content = {<MetalaxToDoRight className='Program' />} /> 
        <MainContainer left_content = {<MetalaxPuzzleLeft />} right_content = {<MetalaxPuzzleRight />} /> 
        </>
    );
}

export default MetalaxPage;