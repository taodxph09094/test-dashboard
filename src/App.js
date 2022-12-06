import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers/history";

import Home from "./pages/Home/Home";
import RouteDashboard from "./pages/Dashboard/RouteDashboard";
import RoutePost from "./pages/Post/RoutePost";
import RouteSetting from "./pages/Settings/RouteSetting";
import Subcription from "./components/Customs/Subcription";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={RouteDashboard} />
        <Route exact path="/posts-management" component={RoutePost} />
        <Route exact path="/settings" component={RouteSetting} />
        {/* <Route exact path="/dashboard/subcription" component={Subcription} /> */}
      </Switch>
    </Router>
  );
}

export default App;
