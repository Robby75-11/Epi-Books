import { Component } from "react";
import { Card } from "react-bootstrap";

// SingleBook deve far vedere un libro! Ma non sa di quale libro si tratta...
// ...sa solo che lo riceverà nelle props sotto forma di "book"

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
          style={{
            border:
              this.props.selectedBook === this.props.book.asin
                ? "3px solid red"
                : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    );
  }
}

export default SingleBook;
