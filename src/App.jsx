import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      asin: "12345",
      title: "Libro 1",
      author: "Autore 1",
      price: 15.99,
    },
    {
      asin: "67890",
      title: "Libro 2",
      author: "Autore 2",
      price: 20.99,
    },
  ]);
  return (
    <>
      <MyNav />

      <Welcome />
      <SingleBook />

      <MyFooter />
    </>
  );
}

export default App;
