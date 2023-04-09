import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import {FaYoutube} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {
  return (
    <Fragment>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className='text-light'><FaYoutube fontSize="1.9rem" color='red'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/" className='text-light'>Home</Link></Nav.Link>
              <Nav.Link><Link to="/" className='text-light'>About</Link></Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown" className='text-light'>
                <NavDropdown.Item><Link to="/" className='text-dark'>Music Videos</Link></NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/" className='text-dark'>comedy videos</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to="/" className='text-dark'>reserved</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link >
                <Link to="/" className='text-light'>contact</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
    
    
  )
}

export default NavBar