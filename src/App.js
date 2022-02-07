import MainContainer from "./Sampanna/MainContainer";
import HomeTodoLeft from "./Sampanna/Home_TODO_Left";
import HomeTodoRight from "./Sampanna/Home_TODO_right";
import HomePageContent from "./Avash/HomePageContent";


const App = () =>{
  return (
    <div className="App">
      {/* Navigation Bar Here */}
      <HomePageContent />
      <MainContainer left_content = {<HomeTodoLeft />} right_content = {<HomeTodoRight />} /> 
      {/* <MainContainer left_content = {} right_content = {} />  */}
      {/* <MainContainer left_content = {} right_content = {} />   */}
    </div>
  );
}

export default App;
