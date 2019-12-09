import React from 'react';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import CTA from '../components/CTA'

const Sport = () => {
  return (
    <Card bgImg="images/sections/sport.jpg">
      <CardBody>
        <CardLeft>
          <h1>Sport</h1>
          <p>
            Participez aux Hivernales de Beach-Volley, le premier tournoi 3x3 mixte indoor de Paris !
            <br />
            Aller hop, en maillot et c'est parti pour un week-end au chaud !!!
          </p>
        </CardLeft>
        <CardRight>
          <CTA href="https://www.helloasso.com/associations/watt-health/evenements/les-hivernales-de-volley">Inscrivez-Vous</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Sport;