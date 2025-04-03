import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import fantasyBooks from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        {/* <AllTheBooks /> */}

        {/* immaginiamo che SingleBook riceva il libro da far vedere
        sotto forma di prop: chiameremo questa prop (oggetto) "book" */}
        {/* <SingleBook book={fantasyBooks[19]} />

        <SingleBook book={fantasyBooks[2]} />
        
        <SingleBook book={fantasyBooks[9]} /> */}
        <BookList arrayOfBooks={fantasyBooks} />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
