const BookList = function (props) {
  return (
    <Container fluid className="text-center p-3">
      <h1 className="text-light p-5">Romance Books</h1>
      <Row className="justify-content-center g-3"></Row>
      {props.arrayOfBooks.map((book) => (
        <Col xs={12} md={4} lg={3} key={book.asin}>
          <Card className="book-cover d-flex flex-column ">
            <Card.Img variant="top" src={book.img} />
            <Card.Body className="d-flex flex-column testColor">
              <Card.Title className="flex-grow-1"> {book.title}</Card.Title>
              <Button variant="dark">Acquista</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Container>
  );
};
export default BookList;
