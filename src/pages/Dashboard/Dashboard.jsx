import React, { useState } from "react";
import { Button } from "@shopify/polaris";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Subcription from "../../components/Customs/Subcription";
import dashboardRoutes from "../../routes/DashboardRoute";
import ChooseDashboard from "../../components/Customs/ChooseDashboard/ChooseDashboard";
import Revenue from "../../components/Customs/Revenue/Revenue";
const Dashboard = () => {
  const location = useLocation();
  const mainPanel = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <Router>
      <div className="wrapper">
        <ChooseDashboard routes={dashboardRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Switch>
              <Route
                exact
                path="/dashboard/subcription"
                component={Subcription}
              />
              <Route exact path="/dashboard/revenue" component={Revenue} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
