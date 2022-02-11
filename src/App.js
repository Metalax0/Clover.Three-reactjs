import Content from "./Content";
import Navigation from "./Ashrin/Navigation/Index";
import { Route, Routes } from "react-router-dom";
import TicTacToeLeft from "./Ashrin/XrinPage/TicTacToeLeft/Index";
import MetalaxPage from "./Sampanna/MetalaxPage";
import DrSeniorPage from "./Avash/DrSeniorPage";
import XrinContent from "./Ashrin/XrinPage/XrinContainer/Index";

const App = () => {
  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/sampanna" element={<MetalaxPage />}></Route>
          <Route path="/avash" element={<DrSeniorPage />}></Route> 
          <Route path="/ashrin" element={<XrinContent />}></Route>
        </Routes>
      </Navigation>
    </div>
  );
};

export default App;
