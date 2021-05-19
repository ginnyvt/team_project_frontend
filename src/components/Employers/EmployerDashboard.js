import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const EmployerDashboard = () => {
  return (
    <div>
      <h3>This is employer dashboard</h3>
      <Navbar>
        <Nav>
          <Nav.Link>Found Candidates</Nav.Link>
          <LinkContainer to='/employers/profile'>
            <Nav.Link>My Profile</Nav.Link>
          </LinkContainer>

          <Nav.Link>Matched</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default EmployerDashboard;
