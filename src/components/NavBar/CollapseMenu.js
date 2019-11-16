import React from 'react';
import { Tabbable } from "reakit/Tabbable";
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseWrapper = styled(animated.div)`
  background: #bcbcbc;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
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
      color: #ffec00;
      border-bottom: 1px solid #ffec00;
    }
  }
`;

const CollapseMenu = ({ navbarState }) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <Tabbable as="li"><a href="/">Sport,</a></Tabbable>
          <Tabbable as="li"><a href="/">Musique,</a></Tabbable>
          <Tabbable as="li"><a href="/">Santé,</a></Tabbable>
          <Tabbable as="li"><a href="/">… quoi d’autre ?</a></Tabbable>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;