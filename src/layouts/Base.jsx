import React, { useState, useCallback } from "react";
import Seo from "./Seo";
import MenuComponent from "../components/Menu";
import TopBarComponent from "../components/TopBar";
import { Frame } from "@shopify/polaris";

const Base = (props) => {
  const { children, title, description } = props;
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const renderTopbar = (
    <TopBarComponent
      toggleMobileNavigationActive={toggleMobileNavigationActive}
    />
  );

  return (
    <Frame
      navigation={<MenuComponent />}
      topBar={renderTopbar}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      <Seo title={title} description={description} />
      {children}
    </Frame>
  );
};

Base.defaultProps = {
  title: "",
  description: "",
};

export default Base;
