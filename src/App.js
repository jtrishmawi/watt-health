import React from 'react';
import NavBar from './components/NavBar';
import Sport from './tabs/Sport';
import Musique from './tabs/Musique';
import Sante from './tabs/Sante';
import Autre from './tabs/Autre';

import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <NavBar />
      <Sport />
      <Musique />
      <Sante />
      <Autre />
      <GlobalStyle />
    </>
  );
}

export default App;
