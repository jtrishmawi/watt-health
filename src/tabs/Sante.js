import React from 'react';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import CTA from '../components/CTA'

const Sante = () => {
  return (
    <Card bgImg="images/sections/sante.jpg">
      <CardBody>
        <CardLeft>
          <h1>Sante</h1>
          <p>
            Découvrez à chaque évènement notre dimension "healthy":
            <br />
            Une santé de fer, une mine d'or et un moral d'acier !
          </p>
        </CardLeft>
        <CardRight>
        <CTA href="https://www.helloasso.com/associations/watt-health/evenements/les-hivernales-de-volley">Inscrivez-Vous</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Sante;