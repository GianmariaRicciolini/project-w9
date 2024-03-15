import React from "react";
import { Container } from "react-bootstrap";
import RowMovies from "./RowMovies";

function AllMovies() {
  return (
    <Container fluid className="bg-dark">
      <RowMovies searchId="Harry%20Potter" />
      <RowMovies searchId="Star%20Wars" />
      <RowMovies searchId="Indiana%20Jones" />
    </Container>
  );
}

export default AllMovies;
