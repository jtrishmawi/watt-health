import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Sport from './tabs/Sport';
import Musique from './tabs/Musique';
import Sante from './tabs/Sante';
import Autre from './tabs/Autre';

import GlobalStyle from './styles/Global';

const Container = styled.div`
  overflow: hidden;
  
  #container {
    height: 100%;
    width: 100vw;
    overflow: hidden;
    margin-top: 6.5rem;
  }

  #container section {
    width: 100%;
    height: calc(100vh - 6.5rem);
    background-color: #fff;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />
      <div id="container">
        <section id="sport"><Sport /></section>
        <section id="musique"><Musique /></section>
        <section id="sante"><Sante /></section>
        <section id="autre"><Autre /></section>
      </div>
      <GlobalStyle />
    </Container>
  );
}

export default App;
