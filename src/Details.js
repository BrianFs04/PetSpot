import React, { Component } from "react";

class Details extends Component {
  state = { name: "" };

  componentDidMount() {
    fetch("http://localhost:1235/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const name = data.map((pets) => {
          return <div key>{pets.name}</div>;
        });
        this.setState({ name: name });
      });
  }

  render() {
    const { name } = this.state;

    return <h1>{name}</h1>;
  }
}

export default Details;
