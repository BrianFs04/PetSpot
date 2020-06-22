import React, { Component } from "react";
import Pet from "./Pet";

// This const allow us to get the id by the URL
const url = window.location.href;
const urlSp = url.split("/");
let id;
if (urlSp.length === 5) {
  id = url.split("/")[4];
} else {
  id = 0;
}
// Class Details which will render the component (information about every single pet by its id)
class Details extends Component {
  // Starting prop state
  state = { pet: "" };

  // Fetching with componentDidMount method our API in order to update pet object value
  componentDidMount() {
    fetch("http://localhost:1235/pets/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // For every single pet call the Pet function so we can get the details of every single one by using its id
        const pet = data.map((pets) => {
          return (
            <Pet
              key={pets.id}
              id={pets.id}
              name={pets.name}
              breed={pets.breed_name}
              sex={pets.sex}
              description={pets.description}
              picture={pets.picture}
            />
          );
        });
        // Updating pet value
        this.setState({ pet: pet });
      });
  }
  // render will call the following const with its value
  render() {
    const { pet } = this.state;
    // It will return the view in accordance with the gotten data
    return <div>{pet}</div>;
  }
}

export default Details;
