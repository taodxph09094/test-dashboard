import React, { useState, useEffect } from "react";
import { Page, SkeletonBodyText } from "@shopify/polaris";
import LoadingScreen from "../../components/LoadingScreen";
import Base from "../../layouts/Base";
import Dashboard from "./Dashboard";
const RouteDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  const dashboardSkeleton = (
    <Page fullWidth>
      <LoadingScreen>
        <SkeletonBodyText lines={1} />
      </LoadingScreen>
    </Page>
  );

  const dashboardPage = (
    <Page fullWidth>
      <Dashboard />
    </Page>
  );

  return (
    <Base title="DASHBOARD" description="">
      {isLoading ? dashboardSkeleton : dashboardPage}
    </Base>
  );
};

export default RouteDashboard;
