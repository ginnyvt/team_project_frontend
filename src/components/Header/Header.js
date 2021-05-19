import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(props.isEmployer);
  return (
    <header>
      <Navbar>
        <Link to='/'>
          <div>LOGO</div>
        </Link>

        <Nav className='justify-content-end'>
          {!isAuthenticated && (
            <Button
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </Button>
          )}

          {/* Employer's navigation */}
          {isAuthenticated && props.isEmployer && (
            <Button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </Button>
          )}

          {/* Employee's navigation */}
          {isAuthenticated && !props.isEmployer && (
            <>
              <Button
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Navbar>

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
