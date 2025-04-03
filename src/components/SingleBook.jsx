import { useState } from "react";
import CommentArea from "./components/CommentArea";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`single-book ${selected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <h3>{book.title}</h3>
      <p>Autore: {book.author}</p>
      <p>Prezzo: {book.price}€</p>
      {selected && <CommentArea bookId={book.asin} />}
    </div>
  );
};
export default SingleBook;
