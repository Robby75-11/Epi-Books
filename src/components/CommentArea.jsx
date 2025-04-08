import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGVkZTk0OTJlNDAwMTVlN2M3MTMiLCJpYXQiOjE3NDQwNDAxMzIsImV4cCI6MTc0NTI0OTczMn0.VHSnef-aTB717ceHPunLHP2eAeRZm7z8rERnuVBSHRM ";
function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (asin) {
        setIsLoading(true);
        try {
          const response = await fetch(URL + asin, {
            headers: {
              Authorization: API_KEY,
            },
          });
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            setComments(comments);
            setIsLoading(false);
            setIsError(false);
          } else {
            setIsLoading(false);
            setIsError(true);
          }
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          setIsError(true);
        }
      }
    };
    fetchComments();
  }, [asin]);
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentsList commentsToShow={comments} />
    </div>
  );
}

export default CommentArea;
