import MyNav from "./components/MyNav";
import TVShows from "./components/TvShow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllMovies from "./components/AllMovies";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
          <TVShows />
        </header>
        <Routes>
          <Route path="/" element={<AllMovies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
