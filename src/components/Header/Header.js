import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

import './Header.css';
import logo from '../Images/logo.svg';

const Header = (props) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(props.isEmployer);
  return (
    <header>

      <Link to='/'>
        <div className="logo"><img src={logo} alt='logo' /></div>
      </Link>

      <div className=".login_container">
        <Nav className='justify-content-end'>
          {!isAuthenticated && (
            <div className="login_logout"
              onClick={() => {
                loginWithRedirect();
              }}
              >
              Login
            </div>
          )}

          {/* Employer's navigation */}
          {isAuthenticated && props.isEmployer && (
            <div className="login_logout"
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
              >
              Logout
            </div>
          )}

          {/* Employee's navigation */}
          {isAuthenticated && !props.isEmployer && (
            <>
                <div className="login_logout"
                  onClick={() => {
                    logout({ returnTo: window.location.origin });
                  }}
                  >
                  Logout
                </div>
            </>
          )}
        </Nav>

      </div>

      {/* <nav>
        <ul>
          {!isAuthenticated && (
            <li>
              <button
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Login
              </button>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <button
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
