import React from 'react';
import styled from 'styled-components';
import Helmet from'react-helmet';

const Head =()=>{
    return(
      <Helmet>
        <title>SBVS</title>   
        <link href="https://fonts.googleapis.com/css?family=Acme|Capriola" rel="stylesheet"/>
      </Helmet>
    )
}

export default Head;