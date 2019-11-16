import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  height: 30vh;
  max-height: 100px;
  min-width: 100px;
  width: 30vw;
  background: none;
  outline: none;
  padding: 1rem;
  border-radius: 5px;
  display: none;

  img {
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
`;

const CTA = ({ children = '' }) => {
  return (
    <Button>
      <img src="button.png" alt="Cliquez ici" />
      {children}
    </Button>
  );
};

export default CTA;