import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import EmployerProfile from '../Employers/EmployerProfile';
import EmployeeProfile from '../Employees/EmployeeProfile';
import EmployeeDashboard from '../Employees/EmployeeDashboard';
import EmployerDashboard from '../Employers/EmployerDashboard';

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
      <div>
        <button onClick={() => signUpEmployeeHandler()}>Im an employee</button>
        <button
          onClick={() => {
            loginWithRedirect({
              screen_hint: 'signup',
              redirectUri: `http://localhost:3000/employers/assign`,
            });
          }}
        >
          Im an employer
        </button>
      </div>
    );
  };

  return isAuthenticated ? renderLoginPage() : renderSignupPage();
};

export default Home;
