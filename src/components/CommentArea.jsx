import React, { useState, useEffect } from "react";
const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (asin) {
      setLoading(true);
      setError(null);

      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setComments(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      // Resetta i commenti e lo stato se non c'è un asin selezionato
      setComments([]);
    }
  }, [asin]); // L'effetto si esegue ogni volta che l'asin cambia

  return (
    <div className="comment-area">
      <h4>Commenti</h4>
      {asin ? (
        <>
          {loading && <p>Caricamento commenti...</p>}
          {error && <p>Errore nel caricamento dei commenti: {error}</p>}
          {!loading && !error && comments.length > 0 && (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>
          )}
          {!loading && !error && comments.length === 0 && (
            <p>Nessun commento per questo libro.</p>
          )}
        </>
      ) : (
        <p>Seleziona un libro per visualizzare i commenti.</p>
      )}
    </div>
  );
};
export default CommentArea;
