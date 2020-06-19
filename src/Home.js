import React from "react";
import LastPets from "./LastPets";
import { Card, Col, Row } from "react-bootstrap";
export const Home = () => (
  <div>
    <div>
      <p className="homeintro">
        PetSpot is an online platform where users can post pets for adoption. We
        want to make the process of adoption easy and contribute to it finding a
        home for as many pets as possible. Every user can register and post a
        pet to adopt including name, photo, breed, sex, and a simple description
        of it.
      </p>
    </div>
    <hr />
    <div className="padding_tops">
      <h3 className="custom_text">
        <b>Recently added pets</b>
      </h3>
      <br />
      <LastPets />
      <p className="homeintros">
        Thank you for using PetSpot We’re here to help you every step of the way
        from “just looking” at pets, to bringing your pet home, to living a long
        and happy life with your new family member.
      </p>
    </div>
    <hr />
    <Row className="padding_cards">
      <Col>
        <Card bg="info" text="light" className="same_size">
          <Card.Header>
            <b>Adoption FAQs</b>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <b>What are the requirements to adopt a pet?</b>
              <ul>
                <li>Proof that you’re at least 18 years of age.</li>
                <li>
                  A picture ID with your current address, or if this isn’t
                  available, a picture ID and a current utility bill.
                </li>
                <li>A meeting with one of our pet adoption counselors.</li>
              </ul>
              <b>Where can I go to adopt a pet?</b>
              <ul>
                <li>
                  Every pet have an adoption button to contact the user or
                  shelter
                </li>
              </ul>
              <b>What steps are involved?</b>
              <ul>
                <li>
                  Once you’ve found a pet you’re interested in adopting, use the
                  adopt button!
                </li>
                <li>
                  We will look up any information we may have on the animal
                  you’ve chosen and help you interact with them.
                </li>
                <li>
                  The shelter is going to contact you and start the adoption
                  paper work
                </li>
              </ul>
              <b>Can I take my new pet home the same day?</b>
              <p>
                In most cases, yes. Pets that have already been spayed or
                neutered will go home with you the same day. If not, he or she
                will stay overnight, have their surgery and generally be
                available to go home the next day. If you know you are in the
                market for a pet, it is a good idea to have some things ready
                for your new pet such as bedding, food, bowls, and toys. That
                way, when you fall in love, you will be ready.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="info" text="light" className="same_size">
          <Card.Header>
            <b>Checklist</b>
          </Card.Header>
          <Card.Body>
            <Card.Title>Questions for All Adopters: </Card.Title>
            <Card.Text>
              <ul>
                <li>
                  Do you have any other pets and how will they react to a new
                  pet?
                </li>
                <li>
                  Is your current residence suited to the pet you’re
                  considering?
                </li>
                <li>
                  How will your social life or work obligations affect your
                  ability to care for a pet?
                </li>
                <li>
                  Do you have a plan for your new pet during vacations and/or
                  work travel?
                </li>
                <li>
                  Are you intolerant of hair, dirt and other realities of
                  sharing your home with a pet, such as allergies?
                </li>
                <li>
                  Do you or any of your household/family members have health
                  issues that may be affected by a pet?
                </li>
                <li>
                  What do you expect your pet to contribute to your life? For
                  example, do you want a running and hiking buddy, or is your
                  idea of exercise watching it on TV?
                </li>
                <li>
                  Have you considered your lifestyle carefully and determined
                  whether a younger or older animal would be a better match for
                  you?
                </li>
                <li>
                  Can you train and handle a pet with behavior issues or are you
                  looking for an easy-going friend?
                </li>
                <li>
                  Do you need a pet who will be reliable with children or one
                  you can take with you when you travel?
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);
