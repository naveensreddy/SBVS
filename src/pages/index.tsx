import React from 'react';
import styled from 'styled-components';
import { enhanceLayout } from '../Enhancers';

const HomepageContainer=styled.div`
  min-height:100vh;
  `

class HomePage extends React.Component{
  render(){
    return(
     <HomepageContainer>
        hello all this is home page
    </HomepageContainer>
    )
  }
}

export default enhanceLayout(HomePage);