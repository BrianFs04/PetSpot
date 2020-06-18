import React from "react";
import LastPets from "./LastPets";
import { Card, Col, Row } from "react-bootstrap";
export const Home = () => (
  <div>
    <div>
      <p className="homeintro">
        PetSpot is an online platform where users and shelters can post pets
        for adoption. Our mission is to make the process of adoption as easy
        as possible and contribute to the adoption of as many pets as
        possible. Every user can register and post a pet to adopt including
        name, photo, description, and age.
        </p>
    </div>
    <h3 className="custom_text"><b>Recently added pets</b></h3>
    <br />
    <LastPets />
    <p className="homeintro">
      PetSpot is an online platform where users and shelters can post pets
      for adoption. Our mission is to make the process of adoption as easy
      as possible and contribute to the adoption of as many pets as
      possible. Every user can register and post a pet to adopt including
      name, photo, description, and age.
    </p>
    <Row className="pad_bot"
    >
      <Col>
        <Card
          bg='info'
          text='light'
        >
          <Card.Header>Faq adopt cats</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          bg='info'
          text='light'
        >
          <Card.Header>Faq adopt pets</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);
