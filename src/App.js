import Content from "./Content";
import Navigation from "./Ashrin/Navigation/Index";
import {Route,Routes} from 'react-router-dom';
import TicTacToe from "./Ashrin/TicTacToe/Index";
const App = () =>{
 
  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          {/* <Route path="/metal" element={<Notfound />}></Route>
          <Route path="/avash" element={<NotFound />}></Route> */}
          <Route path="/ashrin" element={<TicTacToe />}></Route>
       </Routes>
      </Navigation>
      
    </div>
  );
}

export default App;
