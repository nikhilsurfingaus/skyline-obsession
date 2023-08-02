import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets//logos/logo.png';
import { NavLink } from 'react-router-dom';

const NavTab = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" style={{ background: "transparent", height: "60px", zIndex: 1 }} variant="dark">
      <Container className='animate__animated animate__slideInDown'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Navbar.Brand href="/home" style={{ fontSize: "25px" }}>
            <img src={logo} alt="logo" style={{ height: "40px", marginRight: "10px" }} />
            Skyline Obsession
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ fontSize: "18px" }} className="ms-auto">
            <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/history" exact className="nav-link" activeClassName="active-link">History</NavLink>
            <NavLink to="/photos" exact className="nav-link" activeClassName="active-link">Photos</NavLink>
            <NavLink to="/reviews" exact className="nav-link" activeClassName="active-link">Reviews</NavLink>
            <NavLink to="/about" exact className="nav-link" activeClassName="active-link">About</NavLink>
          </Nav>
        </Navbar.Collapse>
        <style type="text/css">
          {`
            @media (max-width: 767px) {
              .navbar-collapse .nav-link {
                width: 100%;
                background: black !important;
              }
            }

            .active-link {
              color: yellow !important;
            }
          `}
        </style>
      </Container>
    </Navbar>
  );
}

export default NavTab;
