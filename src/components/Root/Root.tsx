import React, {FC} from "react";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {createGlobalStyle} from "styled-components";

import configureStore from "../../store/store";
import App from "../App/App";

const {store, persistor} = configureStore();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all, 0.5s ease-in;
    font-family: 'Roboto', sans-serif;
  }
`;

const Root: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle/>
      <App/>
    </PersistGate>
  </Provider>
);

export default Root
