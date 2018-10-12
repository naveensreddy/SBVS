import React from 'react';
import styled from 'styled-components';
import Head from './Head/Head';
import '../scss/index.scss';
import Header from './Header/Header';

const LayoutContainer=styled.div`
  min-height:100vh;
`;

const Layout=(props)=>{
    return(
      <LayoutContainer>
        <Head/>
        <Header/>
         {props.children}
      </LayoutContainer>
    )
}

export default Layout;