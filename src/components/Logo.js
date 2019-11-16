import React from 'react'
import styled from "styled-components";

const Image = styled.img`
  height: 80%;
  margin: auto 0;
`;

const Logo = ({ className }) => {
  return (
    <Image src="logo.png" alt="Watt Health" className={className} />
  )
}

export default Logo