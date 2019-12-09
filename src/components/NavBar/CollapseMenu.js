import React from 'react';
import { Tabbable } from "reakit/Tabbable";
import styled from 'styled-components';
import { Tween } from 'react-gsap';

const CollapseWrapper = styled.div`
  background: #ffffff;
  position: fixed;
  top: 6.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }       

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fece15;
      border-bottom: 1px solid #fece15;
    }
  }
`;

const CollapseMenu = ({ navbarState, handleClick }) => {
  return (
    <Tween
      from={{ css: { transform: 'translate3d(0, 0, 0)' } }}
      to={{ css: { transform: 'translate3d(0, -200px, 0)' } }}
      playState={!navbarState ? 'play' : 'reverse'}
      duration={0.35}
    >
      <CollapseWrapper>
        <NavLinks>
          <Tabbable as="li"><a onClick={handleClick} href="#sport">Sport,</a></Tabbable>
          <Tabbable as="li"><a onClick={handleClick} href="#musique">Musique,</a></Tabbable>
          <Tabbable as="li"><a onClick={handleClick} href="#sante">Santé,</a></Tabbable>
          <Tabbable as="li"><a onClick={handleClick} href="#autre">… quoi d’autre ?</a></Tabbable>
        </NavLinks>
      </CollapseWrapper>
    </Tween>
  );
};

export default CollapseMenu;