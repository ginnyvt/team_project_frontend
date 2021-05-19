import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import RolesContext from './store/roles-context';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import AssignRole from './components/Roles/AssignRole';
import Header from './components/Header/Header';
import EmployeeProfile from './components/Employees/EmployeeProfile';
import EmployerProfile from './components/Employers/EmployerProfile';
import FoundJobs from './components/Employees/FoundJobs';

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isEmployer, setIsEmployer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roleHandler = () => {
    setIsEmployer(true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_URL}/users/${user.sub}`,
      })
        .then((res) => {
          setIsLoading(false);
          const { user_metadata } = res.data;
          if (user_metadata.isEmployer) {
            setIsEmployer(true);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [user]);

  return (
    <RolesContext.Provider
      value={{ isEmployer: isEmployer, roleHandler: roleHandler }}
    >
      <Header isEmployer={isEmployer} />
      <Switch>
        <Route exact path='/'>
          {isLoading ? <p>Loading</p> : <Home isEmployer={isEmployer} />}
        </Route>

        <Route path='/employers/assign'>
          <AssignRole type='employer' />
        </Route>

        <Route exact path='/employees/profile'>
          <EmployeeProfile />
        </Route>

        <Route exact path='/employers/profile'>
          <EmployerProfile />
        </Route>

        <Route exact path='/employees/found-jobs'>
          <FoundJobs />
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </RolesContext.Provider>
  );
};

export default App;
