import React from "react";
import styled from "styled-components";
import {Link} from 'gatsby';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: #f4cd68;
  color: #b52e31;
  justify-content: space-between;
  overflow: hidden;
`;

const Heading = styled.h1`
  padding: 5px 20px;
  font-size: 2rem;
`;

const MenuLink = styled(Link)`
  margin-right: 20px;
  color: #b52e31;
  font-weight: 400;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <Heading>SBVS</Heading>
    </HeaderContainer>
  );
};

export default Header;
