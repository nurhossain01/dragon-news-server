import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSiteNave from './LeftSiteNave';

const Header = () => {
  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>           
          </Nav>
          <div className='d-lg-none'>
            <LeftSiteNave></LeftSiteNave>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;