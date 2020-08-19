import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ReduxProvider>,
  rootElement
);
