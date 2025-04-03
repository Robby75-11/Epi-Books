import SingleComment from "./components/SingleComment";
const CommentsList = ({ comments, onDeleteComment }) => {
  return (
    <div className="comments-list">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            onDeleteComment={onDeleteComment}
          />
        ))
      ) : (
        <p>Nessun commento disponibile</p>
      )}
    </div>
  );
};

export default CommentsList;
