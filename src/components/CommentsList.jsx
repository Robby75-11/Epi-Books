import { ListGroup } from "react-bootstrap";
import SingleComments from "./SingleComments";

const CommentsList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComments comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentsList;
