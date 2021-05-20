

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import RolesContext from "./store/roles-context";

import Home from "./components/Home/Home";
import AssignRole from "./components/Roles/AssignRole";
import Header from "./components/Header/Header";
// import Routes from './components/Employees/Routes'
import EmployeeProfile from './components/Employees/Profile'
import EmployerProfile from "./components/Employers/EmployerProfile";

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
      <Footer/>
    </RolesContext.Provider>

    // <RolesContext.Provider
    //   value={{ isEmployer: isEmployer, roleHandler: roleHandler }}
    // >
    //   <Header />
    //   <Switch>
    //     <Route exact path='/'>
    //       <Home />
    //     </Route>
    //     <Route path='/employers/assign'>
    //       <AssignRole type='employer' />
    //     </Route>

    //     <Route path='/dashboard'>
    //       {isEmployer && <EmployerProfile />}
    //       {!isEmployer && <EmployeeProfile />}
    //     </Route>
    //     <Route path='*'>
    //       <Redirect to='/' />
    //     </Route>
    //   </Switch>
    // </RolesContext.Provider>
    // <div>
    //   <EmployeeProfile/>
    //   {/* <Routes /> */}
    // </div>
  );
};

export default App;
