import { Card } from "react-bootstrap";

// SingleBook deve far vedere un libro! Ma non sa di quale libro si tratta...
// ...sa solo che lo riceverà nelle props sotto forma di "book"

function SingleBook({ book, selectedBook, changeSelectedBook }) {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
}

export default SingleBook;
