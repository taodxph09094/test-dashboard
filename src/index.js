import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { store } from "./store/store";
import { Provider } from "react-redux";
import { AppProvider } from "@shopify/polaris";
import useLink from "./hooks/useLink";

import "@shopify/polaris/styles.css";
import "./assets/css/style.css";
import "antd/dist/reset.css";
ReactDOM.render(
  <AppProvider linkComponent={useLink}>
    <App />
  </AppProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
