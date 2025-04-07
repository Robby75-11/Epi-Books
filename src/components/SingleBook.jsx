import React from "react";
const SingleBook = ({ book, onBookClick, isSelected }) => {
  const handleClick = () => {
    onBookClick(book.asin);
  };

  return (
    <div
      className={`single-book ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img src={book.img} alt={book.title} className="book-cover" />
      <h5 className="book-title">{book.title}</h5>
      <p className="book-author">{book.author}</p>
      {/* Nessun CommentArea qui */}
    </div>
  );
};

export default SingleBook;
