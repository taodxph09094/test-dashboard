import React, { useState } from "react";
import { Button, ButtonGroup } from "@shopify/polaris";
import { Button as ButtonAnt, Space, Radio } from "antd";
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
            <Radio.Group key={key} defaultValue="a" size="large">
              <Link
                to={prop.layout + prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <Radio.Button value="a">{prop.name}</Radio.Button>
              </Link>
            </Radio.Group>
          );
        return null;
      })}
    </>
  );
};

export default ChooseDashboard;
