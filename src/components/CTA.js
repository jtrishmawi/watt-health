import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  max-height: 100px;
  min-width: 100px;
  width: 30vw;
  background: none;
  outline: none;
  padding: 1rem;
  border-radius: 5px;

  img {
    width: 100%;
    max-width: 100px;
    object-fit: contain;
    object-position: left;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
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