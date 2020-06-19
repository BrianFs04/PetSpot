import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export const About = () => (
  <Container>
    <Row className="pad_bot">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h1 className="custom_text margin_text">
          <b>About PetSpot</b>
        </h1>
        <img
          className="d-block w-100"
          src={require("../src/assets/images/about_img.png")}
          alt="Pet1"
        />
      </Col>
      <Col xs={12} sm={7} md={6} lg={6}>
        <p className="intro">
          PetSpot is an online platform where users can post pets for adoption. We want to make the process of adoption as easy as possible and contribute to the adoption of as many pets as possible. Every user can register and post a pet to adopt including name, photo, breed, sex, and a simple description of it.
        </p>
      </Col>
    </Row>
    <Row className="pad_bot pad_top">
      <Col xs={12} sm={7} md={6} lg={6}>
        <h2 className="custom_text">
          <b>Our mission</b>
        </h2>
        <p className="other">
          Our mission is to create a digital space for interaction between people and shelters. This enables pets adoption,
          especially those in precarious conditions. We aim to provide a clear connection between pets that need a new home
          and people who are looking to responsibly adopt a new pet, always prioritizing the pet's well-being.
        </p>
      </Col>
      <Col xs={6} md={4} lg={6}>
        <Image
          src={require("../src/assets/images/r_about.gif")}
          rounded
          fluid
        />
      </Col>
    </Row>
    <Row className="pad_bot pad_top">
      <Col xs={6} md={4} lg={6}>
        <Image
          src={require("../src/assets/images/l_about.gif")}
          rounded
          fluid
        />
      </Col>
      <Col xs={12} sm={7} md={6} lg={6}>
        <h2 className="custom_text">
          <b>Our vision</b>
        </h2>
        <p className="other">
          Our vision is to turn PetsPot in 5 years into an international benchmark of pet care institutions.
          Where there is the possibility that anyone can be a sponsor of one or more pets, even in other countries.
          The sponsor can play with their pets, take care of them and even adopt them, this way we can contribute to the
          reduction of stray animals and improve their life's quality, and give our contribution to the social issues
          in the community

        </p>
      </Col>
    </Row>
  </Container>
);
