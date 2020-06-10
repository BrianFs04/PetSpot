import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";

export default function Pet({ name, breed, sex, description, picture }) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={7} md={6} lg={4}>
          <Image src={picture} roundedCircle fluid />
        </Col>
        <Col xs={12} sm={7} md={6} lg={6}>
          <h1>Name: {name}</h1>
          <h2>Breed: {breed}</h2>
          <h2>Sex: {sex}</h2>
          <p>Description: {description}</p>
        </Col>
      </Row>
    </Container>
  );
}
