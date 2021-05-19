import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import EmployeeProfile from './EmployeeProfile';
import FoundJobs from './FoundJobs';

const EmployeeDashboard = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h2>This is employee dashboard</h2>
      <Navbar>
        <Nav>
          <Nav.Link>Found Jobs</Nav.Link>
          <LinkContainer to='/employees/profile'>
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>

          <Nav.Link>Matched</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default EmployeeDashboard;
