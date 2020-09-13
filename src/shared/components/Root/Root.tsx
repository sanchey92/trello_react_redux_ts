import React, {FC} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import configureStore from "../../../store/store";
import {GlobalStyle} from "./Root.styled";
import App from "../App/App";

const store = configureStore();

const Root: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <App/>
    </BrowserRouter>
  </Provider>
);

export default Root
