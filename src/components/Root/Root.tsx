import React, {FC} from "react";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from "../../store/store";
import { GlobalStyle } from "./Root.styled";
import App from "../App/App";

const {store, persistor} = configureStore();

const Root: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <GlobalStyle/>
        <App/>
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Root
