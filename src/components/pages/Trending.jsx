import React, { Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import {Card, Container,Row,Col}from "react-bootstrap";
import NavBar from '../NavBar';

const Trending = () => {
  return (
    <Fragment>
        <NavBar/>
        <section>
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <Card className='w-100 bg-dark text-light mt-3 me-2 p-2'>
                            <Card.Title>Hello</Card.Title>
                            <Card.Img src='https://media.istockphoto.com/id/1353356088/photo/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-from.jpg?b=1&s=170667a&w=0&k=20&c=wtotQcMBhXPKQU_ZwBxvOZ5oPMihQh_sbgPrK_hCk3s='/>
                            <Card.Body>
                            <Card.Subtitle>
                                Trending around the world
                            </Card.Subtitle>
                            <Button>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Card className='w-100 bg-dark text-light mt-3 me-2 p-2'>
                            <Card.Title>Hello</Card.Title>
                            <Card.Img src='https://media.istockphoto.com/id/1435781294/photo/mid-adult-smiling-latin-businessman-in-office-using-credit-card-to-pay-online.jpg?b=1&s=170667a&w=0&k=20&c=xYpKTl1AanlPZfFRFavrHzdDSCizAFNNpur98KKxzrI='/>
                            <Card.Body>
                            <Card.Subtitle>
                                yes we move
                            </Card.Subtitle>
                            <Button>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Card className='w-100 bg-dark text-light mt-3 me-2 p-2'>
                            <Card.Title>Hello</Card.Title>
                            <Card.Img src='https://media.istockphoto.com/id/1344252964/photo/dedicated-female-student-of-asian-ethnicity-having-online-class-via-laptop-from-the-modern.jpg?b=1&s=170667a&w=0&k=20&c=gAEsm1Gh0x9C7JgrkDwQ4sDwbRcpyYsq2-XxrFf_HTI='/>
                            <Card.Body>
                            <Card.Subtitle>
                                yes we move
                            </Card.Subtitle>
                            <Button>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
  )
}

export default Trending