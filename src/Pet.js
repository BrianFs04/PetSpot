import React from "react";
import Pictures from "./Pictures";
import { Container, Col, Image, Row, Card } from "react-bootstrap";

export default function Pet({ name, breed, sex, description, picture }) {
  return (
    <div>
      <Pictures />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={7} md={6} lg={4}>
            <Image src={picture} roundedCircle fluid />
          </Col>
          <Col xs={12} sm={7} md={6} lg={8}>
            <Card border="light" style={{ width: "42rem" }}>
              <Card.Header className="paws">{name}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {breed} | {sex}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
