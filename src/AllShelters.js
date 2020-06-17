import React, { Component } from "react";
import { Card } from "react-bootstrap";

function Shelters({ name, description, picture }) {
  return (
    <div className="sep_shelters">
      <Card className="bg-dark text-white">
        <Card.Img src={picture} alt="Card image" className="img_shelter" />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

class AllShelters extends Component {
  state = { shelters: "" };

  componentDidMount() {
    fetch("http://localhost:1235/shelters")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const shelters = data.map((shelters) => {
          return (
            <Shelters
              key={shelters.id}
              id={shelters.id}
              name={shelters.shelter_name}
              description={shelters.description}
              picture={shelters.shelter_picture}
            />
          );
        });
        this.setState({ shelters: shelters });
      });
  }

  render() {
    const { shelters } = this.state;

    return <div>{shelters}</div>;
  }
}
export default AllShelters;
