import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <div>
    <Navbar expand="lg">
      <div>
        <Navbar.Brand href="/" className="logo"></Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="item_pad" to="/">
            Home
          </Link>
          <Link className="item_pad" to="/about">
            About us
          </Link>
          <Link className="item_pad" to="/contact">
            Contact Us
          </Link>
          <Link className="item_pad" to="/about">
            Sign up
          </Link>
          <Link className="item_pad" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
