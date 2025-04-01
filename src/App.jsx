import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/AllTheBooks";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      <Welcome />
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main clasname="flex-grow"></main>
        <MyFooter />
      </div>
      <AllTheBooks />
    </>
  );
}

export default App;
