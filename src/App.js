import MyNav from "./components/MyNav";
import TVShows from "./components/TvShow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllMovies from "./components/AllMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <MyNav />
        <TVShows />
      </header>
      <AllMovies />
      <Footer />
    </div>
  );
}

export default App;
