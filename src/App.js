import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import NavBar from './components/NavBar';
import Sport from './tabs/Sport';
import Musique from './tabs/Musique';
import Sante from './tabs/Sante';
import Autre from './tabs/Autre';

import GlobalStyle from './styles/Global';

const Container = styled.div`
  overflow: hidden;
  
  #container {
    height: calc(100vh - 6.5rem);
    width: 100vw;
    overflow: hidden;
    margin-top: 6.5rem;
  }

  #container section {
    width: 100%;
    height: calc(100vh - 6.5rem);
    position: absolute;
    background-color: #fff;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Controller>
        <Scene triggerHook="onLeave" duration="300%" pin>
          <Timeline wrapper={<div id="container" />} >
            <section><Musique /></section>
            <Tween from={{ x: '-100%', opacity: 0 }} to={{ x: '0%', opacity: 1 }} >
              <section><Sport /></section>
            </Tween>
            <Tween from={{ x: '100%', opacity: 0 }} to={{ x: '0%', opacity: 1 }} >
              <section><Sante /></section>
            </Tween>
            <Tween from={{ y: '-100%', opacity: 0 }} to={{ y: '0%', opacity: 1 }} >
              <section><Autre /></section>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
      <GlobalStyle />
    </Container>
  );
}

export default App;
