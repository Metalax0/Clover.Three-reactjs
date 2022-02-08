import React from 'react';
import {Link,Route,Routes} from 'react-router-dom';
import TicTacToe from '../TicTacToe/Index';
function Navigation() {
  return (<div>
     <nav className="flex-navbar">
            {/* <!-- NavBar Logo --> */}
            <div className="image-navbar">
                {/* <!-- <img src="../resources/logo1.png"> --> */}
                <div className="navbar-logo-text">
                    <span className="heading-color">CLO</span><span className="heading-no-color">VER</span>    
                </div>      
            </div>

            {/* <!-- NavBar Menu Items --> */}
            <div className="flex-navmenu">
                {/* <!-- Navigation Bar Menu Item 1 --> */}
                <div>
                    < Link to="/" className = "active_menu"> Home </Link>
                </div>

                {/* <!-- Navigation Bar Menu Item 2 --> */}
                <div>
                    <Link to="avash"> Dr Senior </Link>
                </div>

                {/* <!-- Navigation Bar Menu Item 3 --> */}
                <div>
                    <Link to="sampanna"> Metalax </Link>
                </div>

                {/* <!-- Navigation Bar Menu Item 4 --> */}
                <div>
                    <Link to="ashrin"> Ashrin </Link>
                </div>

            </div>
        </nav>
        {/* <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="metal" element={<Notfound />}></Route>
          <Route path="avash" element={<NotFound />}></Route>
          <Route path="ashrin" element={<TicTacToe />}></Route>
        </Routes> */}
 
  </div>);
}

export default Navigation;

