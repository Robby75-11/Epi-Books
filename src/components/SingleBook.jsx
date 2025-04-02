import { Button, Card, Col, Container, Row } from "react-bootstrap";
import romance from "../data/romance.json";
import React, { Component } from "react";
const SingleBook = function (props) {
  return (
    <Container>
      <Row className="g-2">
        <Col xs={12} md={4} lg={3} key={props.asin}>
          <Card className="book-cover d-flex flex-column ">
            <Card.Img variant="top" src={props.img} />
            <Card.Body className="d-flex flex-column testColor">
              <Card.Title className="flex-grow-1"> {props.title}</Card.Title>
              <Button variant="dark">Acquista</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
