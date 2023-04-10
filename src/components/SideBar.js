import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBarStyles.css";
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'

const SideBar = () => {
  return (
    <Fragment>
      <Container>
            <ul>
              <li><FaHome className='me-2' color='white'/><Link to="/">Home</Link></li>
              <li><FaHome className='me-2' color='white'/><Link to="/">Home</Link></li>
              <li><FaHome className='me-2' color='white'/><Link to="/">Home</Link></li>
              <li><FaHome className='me-2' color='white'/><Link to="/">Home</Link></li>
            </ul>
      </Container>
    </Fragment>
  )
}

export default SideBar