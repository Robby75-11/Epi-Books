import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  // riceve una prop di nome "asin" che fornisce a questa CommentArea l'id del libro
  // su cui fare la fetch

  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };
  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGVkZTk0OTJlNDAwMTVlN2M3MTMiLCJpYXQiOjE3NDQwNDAxMzIsImV4cCI6MTc0NTI0OTczMn0.VHSnef-aTB717ceHPunLHP2eAeRZm7z8rERnuVBSHRM ",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentsList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
