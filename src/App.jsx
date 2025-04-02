import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      <div className="d-flex flex-column">
        <MyNav />
        <main className="flex-grow-1"></main>
      </div>
      <Welcome />

      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
