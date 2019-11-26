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
          <CTA>Achetez Maintenant</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Musique;