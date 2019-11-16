import React from 'react';
import { Tabbable } from "reakit/Tabbable";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-top: .7rem;
  cursor: pointer;
  display: block;
  outline: none;

  &[tabindex]:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &:focus:after {
    content: '';
    display: block;
    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    left: -0.7rem;
    bottom: -0.7rem;
    border: 1px solid #ffec00;
    box-shadow: 0px 0px 5px  #ffec00;
    pointer-events: none;
  }

  & span {
    background: #ffec00;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;

const BurgerMenu = ({ handleNavbar, navbarState }) => {
  return (
    <Tabbable as={Wrapper} onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Tabbable>
  );
};

export default BurgerMenu;