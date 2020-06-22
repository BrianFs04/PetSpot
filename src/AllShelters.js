import React, { Component } from "react";
import { Card } from "react-bootstrap";

// Shelters function which will return a view in the shelter section for every single one of them
function Shelters({ name, description, picture }) {
  return (
    <div>
      <div className="sep_shelters">
        <Card className="bg-dark text-white">
          <Card.Img src={picture} alt="Card image" className="img_shelter" />
          <Card.ImgOverlay>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

// Class AllShelters which will render the component
class AllShelters extends Component {
  // Starting prop state
  state = { shelters: "" };

  // Fetching with componentDidMount method our API in order to update shelters object value
  componentDidMount() {
    fetch("http://localhost:1235/shelters")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // For every single shelter call the function Shelters and print it on the website
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
        // Updating shelters values
        this.setState({ shelters: shelters });
      });
  }

  // render will call the following const with its value
  render() {
    const { shelters } = this.state;

    // And here is the view in accordance with the shelters value while mapping it
    return (
      <div>
        <div>
          <h2 className="custom_text">What Do Animal Shelters Do?</h2>
          <p className="homeintro">
            Animal shelters care for animals needing protection, attempt to find
            homes for homeless animals, and reunite lost pets with their owners.
            Some shelters provide other services, such as animal health
            services, behavioral evaluations, training, and humane education.
          </p>
        </div>
        {shelters}
      </div>
    );
  }
}
export default AllShelters;
