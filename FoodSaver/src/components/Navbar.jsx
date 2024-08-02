import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logOut();
      navigate("/signin");
    } catch {
      console.log("can't logout");
    }
  }

  return (
    <nav className="navbar scrolled ">
      <div className='nav-bdy' >
        <span className="navbar-brand" >
          <Link to="/">
            <span style={{ color: 'red', fontWeight: 'bold' }}>Feed-</span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Forward</span>
          </Link>
        </span>
        <div >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/food-post"
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/contact-us"
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact="true"
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn "
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact="true"
                    to="/signin"
                  >
                    <button type="button" className="btn btn-outline-success">
                      Log in
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact="true"
                    to="/signup"
                  >
                    <button type="button" className="btn btn-outline-danger">
                      Sign up
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





