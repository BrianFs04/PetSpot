import React, { Component } from "react";

class Details extends Component {
  state = { name: "" };

  componentDidMount() {
    fetch("http://localhost:1235/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const pet = data.map((pets) => {
          return (
            <div key={pets.id}>
              <h1>{pets.name}</h1>
              <img
                className="image-container"
                src={pets.picture}
                alt={pets.name}
              ></img>
            </div>
          );
        });
        this.setState({ name: pet });
      });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
export default Details;
