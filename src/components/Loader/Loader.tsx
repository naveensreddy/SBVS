import React,{Fragment} from 'react';
import styled from 'styled-components';

const LoadingContainer=styled.div`

`;

const Loader=({isLoading:boolean})=>{
  return(
    <Fragment>
   { 
     isLoading && <LoadingContainer>

    </LoadingContainer>
  }
  </Fragment>
  )
}

export default Loader;