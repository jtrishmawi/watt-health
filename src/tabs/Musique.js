import React from 'react';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import CTA from '../components/CTA'

const Musique = () => {
  return (
    <Card bgImg="https://loremflickr.com/640/360">
      <CardBody>
        <CardLeft>
          <h1>Musique</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.
          </p>
        </CardLeft>
        <CardRight>
          <CTA>Concert</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Musique;