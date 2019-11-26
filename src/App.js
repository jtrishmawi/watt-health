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
            <section><Sport /></section>
            <Tween from={{ css: { x: '-100%' } }} to={{ css: { x: '0%' } }}>
              <section><Musique /></section>
            </Tween>
            <Tween from={{ css: { x: '100%' } }} to={{ css: { x: '0%' } }}>
              <section><Sante /></section>
            </Tween>
            <Tween from={{ css: { y: '-120%' } }} to={{ css: { y: '0%' } }}>
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
