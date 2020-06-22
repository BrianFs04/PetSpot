import React from "react";
import { Link } from "@reach/router";
import { Card, Button } from "react-bootstrap";

/* The Pets function will allow us to print the view for all pets cards
printing like so the full card with the parameters it has on it */
export default function Pets({ id, name, picture, sex, breed }) {
  return (
    <div className="sep">
      <Card>
        <Card.Img className="image-container" variant="top" src={picture} />
        <Card.Body className="custom-card">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {breed} | {sex}
          </Card.Text>
          <Link to={`/pet/${id}`}>
            <Button onClick variant="outline-dark">
              More about me
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
