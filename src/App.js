import MainContainer from "./Sampanna/MainContainer";
import HomeTodoLeft from "./Sampanna/Home_TODO_Left";
import HomeTodoRight from "./Sampanna/Home_TODO_right";
import HomePageContent from "./Avash/HomePageContent";
import Home_WCounter_Left from "./Avash/Home_WCounter_Left";
import Home_WCounter_Right from "./Avash/Home_WCounter_Right";
import Home_tic_tac_left from "./Ashrin/HOME_TICTAC_LEFT/Index";
import Home_tic_tac_right from "./Ashrin/HOME_TICTAC_RIGHT/Index";
import Navigation from "./Ashrin/Navigation/Index";

const App = () =>{
  return (
    <div className="App">
      <Navigation />
      <HomePageContent />
      <MainContainer left_content = {<Home_WCounter_Left />} right_content = {<Home_WCounter_Right />} />
      <MainContainer left_content = {<HomeTodoLeft />} right_content = {<HomeTodoRight />} /> 
      <MainContainer left_content = {<Home_tic_tac_right/>} right_content = {<Home_tic_tac_left/>} /> 
    </div>
  );
}

export default App;
