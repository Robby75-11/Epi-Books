import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import "./App.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <AllTheBooks />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
