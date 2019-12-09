import React from 'react'
import styled from "styled-components";

const Image = styled.img`
  height: 80%;
  margin: auto 0;
  outline: none;
`;

const Brand = () => {
  return (
    <Image src="navbar.png" alt="Watt Health" />
  )
}

export default Brand