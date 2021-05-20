import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <h2>This is employee dashboard</h2>
      <div className={classes.btn}>
        <button onClick={() => history.push("/updateprofile")}>
          Update Profile
        </button>
        <button onClick={() => history.push("/viewjobs")}>View Jobs</button>
        <button onClick={() => history.push("/viewprofile")}>
          View Profile
        </button>
        <Routes/>

      </div>
    </div>
  );
};

export default withRouter(Profile);
