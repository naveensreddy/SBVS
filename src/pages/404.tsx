import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FourZeroFour = styled.p`
  text-shadow: 1px 2px 20px rgba(0, 0, 0, 0.25);
  font-size: 54px;
`;

const BackHome = styled(Link)`
  color: var(--bluish);
`;

const FourNotFourpage = props => {
  return (
    <Container>
      <FourZeroFour>404</FourZeroFour>
      <BackHome to="/">Back To Home</BackHome>
    </Container>
  );
};

export default FourNotFourpage;