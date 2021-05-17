import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <header>
      <Link to='/'>
        <div>LOGO</div>
      </Link>

      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
