import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import Head from "./Head/Head";
import "../scss/index.scss";
import Header from "./Header/Header";
import { store } from "../store";

const LayoutContainer = styled.div`
  min-height: 100vh;
`;

const Layout = props => {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <Head />
        <Header />
        {props.children}
      </LayoutContainer>
    </Provider>
  );
};

export default Layout;
