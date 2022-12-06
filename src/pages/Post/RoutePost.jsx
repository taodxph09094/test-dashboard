import React, { useState, useEffect } from "react";
import { Page, SkeletonBodyText } from "@shopify/polaris";
import LoadingScreen from "../../components/LoadingScreen";
import Base from "../../layouts/Base";
import Posts from "./Posts";
const RoutePost = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  const postsSkeleton = (
    <Page fullWidth>
      <LoadingScreen>
        <SkeletonBodyText lines={1} />
      </LoadingScreen>
    </Page>
  );

  const postsPage = (
    <Page fullWidth>
      <Posts />
    </Page>
  );
  return (
    <Base title="POSTS" description="">
      {isLoading ? postsSkeleton : postsPage}
    </Base>
  );
};

export default RoutePost;
