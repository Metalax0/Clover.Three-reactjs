import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <nav className="flex-navbar">
        {/* <!-- NavBar Logo --> */}
        <div className="image-navbar">
          {/* <!-- <img src="../resources/logo1.png"> --> */}
          <div className="navbar-logo-text">
            <span className="text-color">CLO</span>
            <span className="text-no-color">VER</span>
          </div>
        </div>

        {/* <!-- NavBar Menu Items --> */}
        <div className="flex-navmenu">
          {/* <!-- Navigation Bar Menu Item 1 --> */}
          <div>
            <Link to="/"> Home </Link>
          </div>

          {/* <!-- Navigation Bar Menu Item 2 --> */}
          <div>
            <Link to="/avash"> Dr Senior </Link>
          </div>

          {/* <!-- Navigation Bar Menu Item 3 --> */}
          <div>
            <Link to="/sampanna">Metalax </Link>
          </div>

          {/* <!-- Navigation Bar Menu Item 4 --> */}
          <div>
            <Link to="/ashrin"> Ashrin </Link>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Navigation;
