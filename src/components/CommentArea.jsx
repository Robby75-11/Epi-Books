import React, { useState, useEffect } from "react";
import CommentsList from "./components/CommentsList";
import AddComment from "./components/AddComment";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (bookId) {
      fetchComments();
    }
  }, [bookId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGVkZTk0OTJlNDAwMTVlN2M3MTMiLCJpYXQiOjE3NDM2ODczOTAsImV4cCI6MTc0NDg5Njk5MH0.HfTmCQv7atMs3OTrDFDL7DjZI9GhjpxcmRafiTJsELQ",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Errore nel recupero dei commenti", error);
    }
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment._id !== commentId));
  };

  return (
    <div className="comment-area">
      {bookId && (
        <>
          <CommentsList
            comments={comments}
            onDeleteComment={handleDeleteComment}
          />
          <AddComment bookId={bookId} onAddComment={handleAddComment} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
