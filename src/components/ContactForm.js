import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  h2 {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;
`;

const Input = styled.input`
  font-size: 1.4em;
  width: 100%;
  height: 50px;
  padding: 0px 15px 0px 15px;
  background: transparent;
  outline: none;
  border: solid 1px #ffec00;
  border-bottom: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffec00;
  }

  &[type="submit"] {
    padding: 0;
    margin: -5px 0px 0px 0px;
    cursor: pointer;
    border: solid 1px #ffec00;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Textarea = styled.textarea`
  font-size: 1.4em;
  width: 100%;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  background: transparent;
  outline: none;
  border: solid 1px #ffec00;
  border-bottom: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffec00;
  }

  @media (max-width: 768px) {
    height: 70px;
    max-height: 70px;
  }
`;


const ContactForm = () => {
  return (
    <Container>
      <h2>Contactez-nous</h2>
      <Form action="https://briskforms.com/go/0e24346a450ce462c7815fed865972e1" method="POST">
        <Input type="text" name="nom" placeholder="Nom" required/>
        <Input type="email" name="email" placeholder="Email" required/>
        <Input type="tel" name="telephone" placeholder="Téléphone" required/>
        <Textarea name="message" placeholder="Envoyez-nous un message" cols="30" rows="10" required></Textarea>
        <Input type="submit" value="Envoyer" />
      </Form>
    </Container>
  );
};

export default ContactForm;