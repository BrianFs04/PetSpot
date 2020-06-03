import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

// const Styles = styled.div`
//   .navbar {
//     background-color: #5E3023;
//   }
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

export const NavigationBar = () => (
    <div>
        <Navbar expand="lg">
            <Navbar.Brand href="/">PetSpot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                <Nav.Link>
                    <Link to="/about">About us</Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>
                    <Link to="/about">Sign up</Link>
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>
                    <Link to="/contact">Login</Link>
                </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div >
  )