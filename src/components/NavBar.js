import React, { Fragment} from 'react';
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarStyles.css"
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {FaYoutube, FaHamburger,FaSearch} from 'react-icons/fa';



const NavBar = () => {
  return (
    <Fragment>
      <Navbar id='navbar' bg="dark" expand="lg">
        <Container id='navbar-items-contrainer' fluid >
          <FaHamburger color='white' className='ms-2 fs-2' />

          <Navbar.Brand className='text-light me-5 '><FaYoutube fontSize="1.9rem" color='red'/>YouTube</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse className='ms-5' id="navbarScroll">
            {/* <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >  
            </Nav> */}
            <Form className="d-flex justify-content-cenetr align-itens-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input search"
                aria-label="Search"
              />
              
              <Button id='search-icon' className='search-icon bg-secondary'><FaSearch color='white'/></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
    
    
  )
}

export default NavBar