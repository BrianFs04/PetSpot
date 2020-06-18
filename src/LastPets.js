import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Pets from "./Pets";

class LastPets extends Component {
  state = { pets: "" };

  componentDidMount() {
    fetch("http://localhost:1235/lastpets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const pets = data.map((pets) => {
          return (
            <Pets
              key={pets.id}
              id={pets.id}
              name={pets.name}
              picture={pets.picture}
              sex={pets.sex}
              breed={pets.breed_name}
            />
          );
        });
        this.setState({ pets: pets });
      });
  }

  render() {
    const { pets } = this.state;

    return <CardDeck>{pets}</CardDeck>;
  }
}
export default LastPets;
