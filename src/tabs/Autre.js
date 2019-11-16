import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import Slider from '../components/Slider';
import Slide from '../components/Slide';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import Share from '../components/Share';

const StyledCardBody = styled(CardBody)`
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const StyledLogo = styled(Logo)``;

const StyledCardLeft = styled(CardLeft)`
  flex: 1 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCardRight = styled(CardRight)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex: 1 50%;

  @media (max-width: 768px) {
    width: 100%;
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
        {/* <StyledCardLeft>
          <Slider>
            <Slide />
          </Slider>
        </StyledCardLeft> */}
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