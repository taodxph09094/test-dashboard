import React, { useState, useEffect } from "react";
import { Page, SkeletonBodyText } from "@shopify/polaris";
import LoadingScreen from "../../components/LoadingScreen";
import Base from "../../layouts/Base";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  const homeSkeleton = (
    <Page fullWidth>
      <LoadingScreen>
        <SkeletonBodyText lines={1} />
      </LoadingScreen>
    </Page>
  );

  const homePage = <Page fullWidth>Choose navigate</Page>;
  return (
    <Base title="DASHBOARD" description="">
      {isLoading ? homeSkeleton : homePage}
    </Base>
  );
};

export default Home;
