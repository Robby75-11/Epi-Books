import React, { useState } from "react";
const AddComment = ({ bookId, onAddComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGVkZTk0OTJlNDAwMTVlN2M3MTMiLCJpYXQiOjE3NDM2ODczOTAsImV4cCI6MTc0NDg5Njk5MH0.HfTmCQv7atMs3OTrDFDL7DjZI9GhjpxcmRafiTJsELQ",
          },
          body: JSON.stringify({
            comment,
            rate,
            elementId: bookId,
          }),
        }
      );
      if (response.ok) {
        const newComment = await response.json();
        onAddComment(newComment);
        setComment("");
        setRate(1);
      }
    } catch (error) {
      console.error("Errore nell'aggiunta del commento", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Scrivi un commento..."
        required
      />
      <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <button type="submit">Aggiungi</button>
    </form>
  );
};

export default AddComment;
