import React from "react";
import { Link } from "@reach/router";
import { Card, Button } from "react-bootstrap";

export default function Pets({ id, name, description, picture }) {
  return (
    <div className="sep">
      <Card>
        <Card.Img className="image-container" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/pet/${id}`}>
            <Button onClick variant="outline-dark">
              Adopt me!
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
