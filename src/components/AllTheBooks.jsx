import { Card, Col, Container, Row, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
// fantasy è un array di libri!

const AllTheBooks = function () {
  return (
    <Container>
      <Row>
        {fantasy.map((fantasyBook) => {
          return (
            <Col xs={12} md={4} lg={3} key={fantasyBook.asin}>
              <Card>
                <Card.Img variant="top" src={fantasyBook.img} />
                <Card.Body>
                  <Card.Title>{fantasyBook.title}</Card.Title>
                  <Card.Text>
                    {fantasyBook.asin} - {fantasyBook.price}€
                  </Card.Text>
                  <Button variant="primary">COMPRAMI</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
