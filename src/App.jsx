import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";

<MyNav />;

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simula una chiamata API per ottenere la lista dei libri
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="app">
      <header className="mb-4 p-3 bg-light">
        <h1>Libreria Online</h1>
      </header>
      <main className="container-fluid">
        {loading && <p>Caricamento libri...</p>}
        {error && <p>Errore nel caricamento dei libri: {error}</p>}
        {!loading && !error && <BookList books={books} />}
        {!loading && !error && books.length === 0 && (
          <p>Nessun libro disponibile.</p>
        )}
      </main>
      {/* <AllTheBooks /> */}

      {/* immaginiamo che SingleBook riceva il libro da far vedere
        sotto forma di prop: chiameremo questa prop (oggetto) "book" */}
      {/* <SingleBook book={fantasyBooks[19]} />

        <SingleBook book={fantasyBooks[2]} />
        
        <SingleBook book={fantasyBooks[9]} /> */}

      <MyFooter />
    </div>
  );
};

export default App;
