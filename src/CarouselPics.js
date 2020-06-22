import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

// This const allow us to get the id by the URL
const url = window.location.href;
const urlSp = url.split("/");
let id;
if (urlSp.length === 5) {
  id = url.split("/")[4];
} else {
  id = 0;
}

/* This class will allow us to have a picture carousel for every single pet
we're not using it but it works (having plans to use this one shortly) */
class CarouselPics extends Component {
  state = { pictures: [] };

  // Fetching with componentDidMount method our API in order to update pictures object value
  componentDidMount() {
    fetch("http://localhost:1235/pictures/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // For every single pet we'll get the pictures of it in accordance with its id
        const pictures = data.map((p) => {
          return (
            <Carousel key={p} fade={true} interval={5000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={p.pictures[0]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={p.pictures[1]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={p.pictures[2]}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          );
        });
        // Updating pictures values
        this.setState({ pictures: pictures });
      });
  }
  // render will call the following const with its value
  render() {
    const { pictures } = this.state;
    // And here is the view in accordance with the pictures value while mapping it
    return <div>{pictures}</div>;
  }
}
export default CarouselPics;
