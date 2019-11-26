import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';
import { MailOutline } from 'styled-icons/material/MailOutline';
import { Youtube } from 'styled-icons/boxicons-logos/Youtube';

const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
  width: 100%;
`;

const Item = styled.li`
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
`;

const StyledFacebook = styled(FacebookSquare)`
  color: #4267B2;
`;

const StyledInstagram = styled(Instagram)`
  color: #ffffff;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  border-radius: 1rem;
  height: 4rem;
  width: 4rem;
`;

const StyledLinkedin = styled(Linkedin)`
  color: #2867B2;
`;

const StyledYoutube = styled(Youtube)`
  color: #FF0000;
`;

const StyledMail = styled(MailOutline)`
  color: #F40009;
`;

const Share = () => {
  return (
    <Container>
      <Item><a href="https://www.facebook.com/Watt-health--104593067655823/" target="_blank" rel="noopener noreferrer"><StyledFacebook /></a></Item>
      <Item><a href="https://www.instagram.com/watthealth75/" target="_blank" rel="noopener noreferrer"><StyledInstagram /></a></Item>
      <Item><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><StyledLinkedin /></a></Item>
      <Item><a href="mailto:watthealth.asso@gmail.com" target="_blank" rel="noopener noreferrer"><StyledMail /></a></Item>
      <Item><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><StyledYoutube /></a></Item>
    </Container>
  );
};

export default Share;