import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const EmployerProfile = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      <div>
        <h3>This is employer profile</h3>
        <form>
          <button>Update profile</button>
        </form>
      </div>
    </>
  );
};

export default EmployerProfile;
