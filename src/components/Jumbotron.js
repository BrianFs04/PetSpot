import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
//import styled from 'styled-components';
import bons from '../assets/bons.jpg';

// const Styles = styled.div`
  
// `;

export const Jumbotron = () => (
  <div>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Hi!</h1>
        <p>Change a life's Pet with a click</p>
      </Container>
    </Jumbo>
  </div>
)