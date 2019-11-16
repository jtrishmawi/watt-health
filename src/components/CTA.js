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
  border: none;

  img {
    width: 100%;
    max-width: 100px;
    object-fit: contain;
    object-position: left;
  }

  span {
    flex: 1 auto;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const CTA = ({ children = '' }) => {
  return (
    <Button>
      <img src="button.png" alt="Cliquez ici" />
      <span>{children}</span>
    </Button>
  );
};

export default CTA;