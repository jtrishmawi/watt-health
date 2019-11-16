import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.center ? 'center' : 'flex-end'};
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
`;

export const CardBody = styled.div`
  background: rgba(255, 255, 255, 0.3);
  min-height: 33%;
  padding: 2rem 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }
`;

export const CardLeft = styled.div`
`;

export const CardRight = styled.div`
`;
