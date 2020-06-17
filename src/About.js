import React from 'react'
import { Carousel, Row, Col, Container, Image } from 'react-bootstrap';

export const About = () => (
    <Container>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <img
                    className="d-block w-100"
                    src="https://petcareroom.com/wp-content/uploads/2020/01/cropped-cbd-for-pets-focus-hemp-co-blog-post-featured-image-scaled.jpg"
                    alt="Pet1"
                />
            </Col>
            <br />
            <br />
            <br />
            <Col xs={12} sm={7} md={6} lg={6}>
                <h1>About PetSpot</h1>
                <p>PetSpot is an online platform where users and shelters can post pets for adoption.  Our mission is to make the process of adoption as easy as possible and contribute to the adoption of as many pets as possible.
Every user can register and post a pet to adopt including name, photo, description, and age.</p>
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
            <Col xs={12} sm={7} md={6} lg={6}>
                <h2>Our mission</h2>
                <p>PetSpot is an online platform where users and shelters can post pets for adoption.  Our mission is to make the process of adoption as easy as possible and contribute to the adoption of as many pets as possible.
Every user can register and post a pet to adopt including name, photo, description, and age.</p>
            </Col>
            <Col xs={6} md={4} lg={6}>
                <Image src="https://cdn.pixabay.com/photo/2016/02/19/10/28/dog-1209250_960_720.jpg" rounded fluid />
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
            <Col xs={6} md={4} lg={6}>
                <Image src="https://cdn.pixabay.com/photo/2016/02/19/10/28/dog-1209250_960_720.jpg" rounded fluid />
            </Col>
            <Col xs={12} sm={7} md={6} lg={6}>
                <h2>Our vision</h2>
                <p>PetSpot is an online platform where users and shelters can post pets for adoption.  Our mission is to make the process of adoption as easy as possible and contribute to the adoption of as many pets as possible.
Every user can register and post a pet to adopt including name, photo, description, and age.</p>
            </Col>
        </Row>
        <br />
        <br />
        <br />
    </Container>
)