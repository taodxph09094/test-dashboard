import React, { useState, useEffect } from "react";
import { Page, SkeletonBodyText } from "@shopify/polaris";
import LoadingScreen from "../../components/LoadingScreen";
import Base from "../../layouts/Base";
import Settings from "./Settings";
const RouteSetting = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  const settingSkeleton = (
    <Page fullWidth>
      <LoadingScreen>
        <SkeletonBodyText lines={1} />
      </LoadingScreen>
    </Page>
  );

  const settingPage = (
    <Page fullWidth>
      <Settings />
    </Page>
  );

  return (
    <Base title="SETTINGS" description="">
      {isLoading ? settingSkeleton : settingPage}
    </Base>
  );
};

export default RouteSetting;
