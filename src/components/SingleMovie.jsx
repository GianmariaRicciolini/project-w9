import React from "react";
import { Col } from "react-bootstrap";

function SingleMovie({ movie }) {
  return (
    <Col className="text-center" style={{ height: "400px" }}>
      <img className="w-100" src={movie.Poster} alt={movie.Title} />
    </Col>
  );
}

export default SingleMovie;
