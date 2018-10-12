import React from 'react';
import styled from 'styled-components';

const HeaderContainer=styled.header`
  height:60px;
`;

const Header=(props)=>{
    return(
      <HeaderContainer>
        header here
      </HeaderContainer>
    )
}

export default Header;