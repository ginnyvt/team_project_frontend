import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import RolesContext from './store/roles-context';

import Home from './components/Home/Home';
import AssignRole from './components/Roles/AssignRole';
import Header from './components/Header/Header';
import EmployerProfile from './components/Employers/EmployerProfile';
import EmployeeProfile from './components/Employees/EmployeeProfile';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [isEmployer, setIsEmployer] = useState(false);

  const roleHandler = () => {
    setIsEmployer(true);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <RolesContext.Provider
      value={{ isEmployer: isEmployer, roleHandler: roleHandler }}
    >
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/employers/assign'>
          <AssignRole type='employer' />
        </Route>

        <Route path='/dashboard'>
          {isEmployer && <EmployerProfile />}
          {!isEmployer && <EmployeeProfile />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </RolesContext.Provider>
  );
};

export default App;
