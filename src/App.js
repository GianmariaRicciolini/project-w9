import MyNav from "./components/MyNav";
import TVShows from "./components/TvShow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Tv } from "react-bootstrap-icons";

function App() {
  return (
    <div>
      <header>
        <MyNav />
        <TVShows />
      </header>
    </div>
  );
}

export default App;
