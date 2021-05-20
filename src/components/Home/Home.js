import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import EmployerProfile from '../Employers/EmployerProfile';
import EmployeeProfile from '../Employees/EmployeeProfile';
import EmployeeDashboard from '../Employees/EmployeeDashboard';
import EmployerDashboard from '../Employers/EmployerDashboard';

import './Home.css';

const Home = (props) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const signUpEmployeeHandler = () => {
    loginWithRedirect({
      screen_hint: 'signup',
      redirectUri: `http://localhost:3000`,
    });
  };

  const renderLoginPage = () => {
    if (props.isEmployer) {
      return <EmployerDashboard />;
    } else {
      return <EmployeeDashboard />;
    }
  };

  const renderSignupPage = () => {
    return (
      <div className="home">
        <div className="container_home">
          <div className='image'></div>
          <div className='text_section'>
            <h1>Create an account and find your match!</h1>
            <div className='buttons'>
              <div className="signup" onClick={() => signUpEmployeeHandler()}>Im an <span>employee</span></div>
              <div className="signup"
                onClick={() => {
                  loginWithRedirect({
                    screen_hint: 'signup',
                    redirectUri: `http://localhost:3000/employers/assign`,
                  });
                }}
              >
                Im an <span>employer</span>
              </div>
            </div>
            <p>
              We make sure web developers and employers meet. Sign up, tick the
              skills you have - and we will match you with corresponding jobs for
              you to pick from. If they pick you back, you can talk business! Your
              new career is awaiting.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return isAuthenticated ? renderLoginPage() : renderSignupPage();
};

export default Home;
