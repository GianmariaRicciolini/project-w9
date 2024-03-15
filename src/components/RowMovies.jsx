import { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Row } from "react-bootstrap";

const url = "http://www.omdbapi.com/?apikey=df894da2&s=";

class RowMovies extends Component {
  state = {
    movies: [],
  };

  fetchMovie = () => {
    fetch(`${url}${this.props.searchId}`)
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          if (response.status === 400) {
            throw new Error("400 - Errore lato client");
          }

          if (response.status === 404) {
            throw new Error("404 - Dato non trovato");
          }

          if (response.status === 500) {
            throw new Error("500 - Errore lato server");
          }

          throw new Error("Errore nel reperimento dati");
        }

        return response.json();
      })
      .then((moviesFromAPI) => {
        console.log("Movie:", moviesFromAPI);

        this.setState({
          movies: moviesFromAPI.Search,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movies } = this.state;

    return (
      <Row className="pt-5">
        <h2 className="text-light pb-3">{this.props.searchId.split("%20").join(" ")}</h2>
        {movies.slice(0, 6).map((movie, index) => (
          <SingleMovie key={index} movie={movie} />
        ))}
      </Row>
    );
  }
}
export default RowMovies;
