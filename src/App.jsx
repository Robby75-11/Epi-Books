import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <MyNav />
        <main className="flex-grow-1"></main>
      </div>
      <Welcome />
      <SingleBook />
      <BookList />

      <MyFooter />
    </>
  );
}

export default App;
