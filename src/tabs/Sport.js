import React from 'react';
import { Card, CardBody, CardLeft, CardRight } from '../components/Card';
import CTA from '../components/CTA'

const Sport = () => {
  return (
    <Card bgImg="images/slides/nNkm5WUTD18.jpg">
      <CardBody>
        <CardLeft>
          <h1>Sport</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.
          </p>
        </CardLeft>
        <CardRight>
          <CTA>Achetez Maintenant</CTA>
        </CardRight>
      </CardBody>
    </Card>
  );
};

export default Sport;