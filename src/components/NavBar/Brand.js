import React from 'react'
import { Tabbable } from "reakit/Tabbable";
import styled from "styled-components";

const Image = styled.img`
  height: 80%;
  margin: auto 0;
`;

const Brand = () => {
  return (
    <Tabbable as={Image} src="navbar.png" alt="Watt Health" />
  )
}

export default Brand