import React, {useState} from 'react'
import { Tabbable } from "reakit/Tabbable";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #bcbcbc;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

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
      color: #ffec00;
      border-bottom: 1px solid #ffec00;
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
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
          <Tabbable as="a">Sport,</Tabbable>
          <Tabbable as="a">Musique,</Tabbable>
          <Tabbable as="a">Santé,</Tabbable>
          <Tabbable as="a">… quoi d’autre ?</Tabbable>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={isOpen}
              handleNavbar={() => setIsOpen(state => !state)}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={isOpen}
        handleNavbar={() => setIsOpen(state => !state)}
      />
    </>
  )
}

export default Navbar