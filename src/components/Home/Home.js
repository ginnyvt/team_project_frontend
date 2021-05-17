import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = (props) => {
  const { loginWithRedirect } = useAuth0();

  const signUpEmployeeHandler = () => {
    loginWithRedirect({
      screen_hint: 'signup',
      redirectUri: `http://localhost:3000/dashboard`,
    });
  };

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

export default Home;
