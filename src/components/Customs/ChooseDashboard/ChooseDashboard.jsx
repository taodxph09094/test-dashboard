import React from "react";
import { Button, ButtonGroup } from "@shopify/polaris";
import { Link, NavLink, useLocation } from "react-router-dom";
const ChooseDashboard = ({ routes }) => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <>
      {routes.map((prop, key) => {
        if (!prop.redirect)
          return (
            <ButtonGroup
              className={
                prop.upgrade
                  ? "active active-pro"
                  : activeRoute(prop.layout + prop.path)
              }
              key={key}
            >
              <Link
                to={prop.layout + prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <Button>
                  <p>{prop.name}</p>
                </Button>
              </Link>
            </ButtonGroup>
          );
        return null;
      })}
    </>
  );
};

export default ChooseDashboard;
