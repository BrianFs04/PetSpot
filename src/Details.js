import React, { Component } from "react";
import { NoMatch } from "./NoMatch";
import Pet from "./Pet";

const url = window.location.href;
const urlSp = url.split("/");
let id;
if (urlSp.length === 5) {
  id = url.split("/")[4];
} else {
  id = 0;
}
class Details extends Component {
  state = { pet: "" };

  componentDidMount() {
    fetch("http://localhost:1235/pets/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
        this.setState({ pet: pet });
      });
  }
  render() {
    const { pet } = this.state;
    return <div>{!pet ? <NoMatch /> : pet}</div>;
  }
}

export default Details;
