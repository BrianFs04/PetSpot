import React from "react";
import { Link } from "@reach/router";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";

export default function Pet({ name, breed, sex, description, picture }) {
  return (
    <div className="pad_bot">
      <Container className="pad_top">
        <Row>
          <Col xs={12} sm={7} md={6} lg={4}>
            <Image src={picture} fluid />
          </Col>
          <Col xs={12} sm={7} md={6} lg={8}>
            <Card
              className="custom-card"
              border="light"
              style={{ width: "42rem" }}
            >
              <Card.Header className="paws">{name}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {breed} | {sex}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/askform/${name}`}>
                  <Button onClick variant="outline-dark">
                    Adopt me!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
