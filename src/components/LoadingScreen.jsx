import React from "react";
import { Loading } from "@shopify/polaris";
const LoadingScreen = ({ children }) => {
  return (
    <div style={{ height: "100px" }}>
      <Loading />
      {children}
    </div>
  );
};

export default LoadingScreen;
