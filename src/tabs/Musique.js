import React from 'react';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import CTA from '../components/CTA'

const Musique = () => {
  return (
    <Card bgImg="images/sections/musique.jpg">
      <CardBody>
        <CardLeft>
          <h1>Musique</h1>
          <p>
            Envie de sortir ? de danser ? de vous amuser avec vos amis ?
            <br />
            La beach party vous accueille le samedi 21 décembre 2019 les pieds dans le sable !
          </p>
        </CardLeft>
        <CardRight>
        <CTA href="https://www.helloasso.com/associations/watt-health/evenements/les-hivernales-de-beach-volley-3x3-mixte-2-1">Inscrivez-Vous</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Musique;