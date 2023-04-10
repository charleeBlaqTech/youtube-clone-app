import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/FeedStyles.css';
import {Container,Row,Col,Button}from "react-bootstrap";
import {NavBar,Trending,SideBar} from '../pages';


const Feed = () => {
  return (
    <Fragment>
       
      <Container fluid>
        <Row>
        <NavBar/>
        </Row>
        <Row>
            <Col lg={2} md={2} sm={2} xs={0} className='bg-dark xs-d-none'>
              <SideBar/>
            </Col>
            <Col lg={10} md={10} sm={10} xs={12}>
                <Row>
                    <Col>
                            <Button className='bg-secondary'>ALL</Button>
                            <Button className='bg-secondary'>Music</Button>
                            <Button className='bg-secondary'>Comedy</Button>
                            <Button className='bg-secondary'>Afrobeats</Button>
                            <Button className='bg-secondary'>React Router</Button>
                            <Button className='bg-secondary'>AI</Button>
                            <Button className='bg-secondary'>Sales</Button>
                            <Button className='bg-secondary'>Sports</Button>
                            <Button className='bg-secondary'>Computers</Button>
                            <Button className='bg-secondary'>Live</Button>
                            <Button className='bg-secondary'>Sketch</Button>
                            <Button className='bg-secondary'>Nigeria</Button>
                    </Col>
                        
                </Row>
                
                <Row>
                  <Col>
                    <Trending/>
                  </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Feed