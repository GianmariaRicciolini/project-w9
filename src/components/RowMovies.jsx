import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Row } from "react-bootstrap";
import MySpinner from "./MySpinner";

const url = "http://www.omdbapi.com/?apikey=df894da2&s=";

class RowMovies extends Component {
  state = {
    movies: [],
    loading: true,
  };

  fetchMovie = () => {
    fetch(`${url}${this.props.searchId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante il caricamento dei dati");
        }
        return response.json();
      })
      .then((moviesFromAPI) => {
        this.setState({
          movies: moviesFromAPI.Search,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <Row className="pt-3 overflow-hidden">
        <h2 className="text-light pb-3">{this.props.searchId.split("%20").join(" ")}</h2>
        {loading ? <MySpinner /> : movies.slice(0, 6).map((movie, index) => <SingleMovie key={index} movie={movie} />)}
      </Row>
    );
  }
}

export default RowMovies;
