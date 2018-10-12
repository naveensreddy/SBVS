import React from "react";
import Layout from "../components/Layout";

//enhance the page component by wrapping aroung layout component
export const enhanceLayout = (
  WrappedComponent: React.ComponentType
) => props => (
  <Layout location={props.location}>
    <WrappedComponent {...props} />
  </Layout>
);
