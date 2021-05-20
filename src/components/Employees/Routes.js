import { React, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfileUpdateForm from "./ProfileUpdateForm";
import ProfileView from "./ProfileView";
import ViewJob from "./ViewJob";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/updateprofile" component={ProfileUpdateForm} />
          <Route path="/viewprofile" component={ProfileView} />
          <Route path="/viewjobs" component={ViewJob} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
