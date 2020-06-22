import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Pets from "./Pets";

// Class LastPets which will render last 3 pets added in our API
class LastPets extends Component {
  // Starting prop state
  state = { pets: "" };

  // Fetching with componentDidMount method our API in order to update pets object value with the last 3 pets added
  componentDidMount() {
    fetch("http://localhost:1235/lastpets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // For every single pet call the Pet function so we can get the details of every single one by using its id
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
        // Updating pets value
        this.setState({ pets: pets });
      });
  }
  // render will call the following const with its value
  render() {
    const { pets } = this.state;
    // It will return the view in accordance with the gotten data
    return <CardDeck>{pets}</CardDeck>;
  }
}
export default LastPets;
