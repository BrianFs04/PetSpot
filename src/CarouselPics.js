import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const url = window.location.href;
const urlSp = url.split("/");
let id;
if (urlSp.length === 5) {
  id = url.split("/")[4];
} else {
  id = 0;
}
class CarouselPics extends Component {
  state = { pictures: [] };

  componentDidMount() {
    fetch("http://localhost:1235/pictures/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
        this.setState({ pictures: pictures });
      });
  }

  render() {
    const { pictures } = this.state;
    return <div>{pictures}</div>;
  }
}
export default CarouselPics;
