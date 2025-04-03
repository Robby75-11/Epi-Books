const SingleComment = ({ comment, onDeleteComment }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "YOUR_API_KEY",
          },
        }
      );
      if (response.ok) {
        onDeleteComment(comment._id);
      }
    } catch (error) {
      console.error("Errore nella cancellazione del commento", error);
    }
  };

  return (
    <div className="single-comment">
      <p>
        {comment.comment} - Voto: {comment.rate}
      </p>
      <button onClick={handleDelete}>Elimina</button>
    </div>
  );
};
export default SingleComment;
