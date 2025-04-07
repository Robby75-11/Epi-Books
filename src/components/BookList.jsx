// BookList riceve dalle props un array di libri, sotto il nome di "arrayOfBooks"

import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React, { useState, useEffect } from "react";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleBookClick = (asin) => {
    setSelectedBookId(asin);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          {" "}
          {/* Colonna per la griglia dei libri (occupa 8 delle 12 colonne) */}
          <div className="book-grid">
            {books.map((book) => (
              <SingleBook
                key={book.asin}
                book={book}
                onBookClick={handleBookClick}
                isSelected={selectedAsin === book.asin}
              />
            ))}
          </div>
        </Col>
        <Col md={4}>
          {/* Colonna per la CommentArea (occupa le restanti 4 colonne) */}
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
