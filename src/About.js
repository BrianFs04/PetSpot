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
          PetSpot is an online platform where users and shelters can post pets
          for adoption. Our mission is to make the process of adoption as easy
          as possible and contribute to the adoption of as many pets as
          possible. Every user can register and post a pet to adopt including
          name, photo, description, and age.
        </p>
      </Col>
    </Row>
    <Row className="pad_bot pad_top">
      <Col xs={12} sm={7} md={6} lg={6}>
        <h2 className="custom_text">
          <b>Our mission</b>
        </h2>
        <p className="other">
          PetSpot is an online platform where users and shelters can post pets
          for adoption. Our mission is to make the process of adoption as easy
          as possible and contribute to the adoption of as many pets as
          possible. Every user can register and post a pet to adopt including
          name, photo, description, and age.
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
          PetSpot is an online platform where users and shelters can post pets
          for adoption. Our mission is to make the process of adoption as easy
          as possible and contribute to the adoption of as many pets as
          possible. Every user can register and post a pet to adopt including
          name, photo, description, and age.
        </p>
      </Col>
    </Row>
  </Container>
);
