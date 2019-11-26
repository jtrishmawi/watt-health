import React from 'react';
import styled from 'styled-components';
import { Card, CardLeft, CardRight } from '../components/Card';
import Slider from '../components/Slider';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import Share from '../components/Share';

const StyledCardBody = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const StyledLogo = styled(Logo)``;

const StyledCardLeft = styled(CardLeft)`
  flex: 50%;
  max-width: 50%;
  padding-right: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCardRight = styled(CardRight)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 50%;
  max-width: 50%;
  padding-left: 1.5rem;
  height: calc(100vh - 6.5rem);

  @media (max-width: 768px) {
    width: 100%;
    flex: 100%;
    max-width: 100%;
  }

  ${StyledLogo} {
    height: 25vh;
    margin: 0;
  }
`;

const Autre = () => {
  return (
    <Card>
      <StyledCardBody>
        <StyledCardLeft>
          <Slider />
        </StyledCardLeft>
        <StyledCardRight>
          <StyledLogo />
          <ContactForm />
          <Share />
        </StyledCardRight>
      </StyledCardBody>
    </Card>
  );
};

export default Autre;