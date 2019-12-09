import React, { useState, useCallback } from 'react'
import { Tabbable } from "reakit/Tabbable";
import styled from "styled-components";
import { Tween } from 'react-gsap';
import { TweenMax } from 'gsap';

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const NavBarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 2;
  font-size: 1.85rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 7rem;
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  flex: 1 auto;
  text-align: center;

  & a {
    color: #000000;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fece15;
      border-bottom: 1px solid #fece15;
    }

    &:last-child {
      margin-left: 3rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tween from={{ css: { transform: 'translate3d(0, -10rem, 0)' } }} to={{ css: { transform: 'translate3d(0, 0, 0)' } }} >
        <NavBarWrapper>
          <FlexContainer>
            <Brand />
            <Tween
              from={{ css: { transform: 'translate3d(0, 30px, 0)', opacity: 0 } }}
              to={{ css: { transform: 'translate3d(0, 0, 0)', opacity: 1 } }}
              delay={0.8}
              ease="Elastic.easeInOut"
            >
              <NavLinks>
                <Tabbable as="a" href="#sport">Sport,</Tabbable>
                <Tabbable as="a" href="#musique">Musique,</Tabbable>
                <Tabbable as="a" href="#sante">Santé,</Tabbable>
                <Tabbable as="a" href="#autre">… quoi d’autre ?</Tabbable>
              </NavLinks>
            </Tween>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={isOpen}
                handleNavbar={() => setIsOpen(state => !state)}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBarWrapper>
      </Tween>
      <CollapseMenu
        navbarState={isOpen}
      />
    </>
  )
}

export default Navbar

// open.interpolate({
//   range: [0, 0.2, 0.3, 1],
//   output: [0, -20, 0, -200],
// }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
// }}