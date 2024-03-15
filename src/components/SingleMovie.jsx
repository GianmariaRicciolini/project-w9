import React from "react";
import { Col } from "react-bootstrap";

function SingleMovie({ movie }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} className="text-center pb-3">
      <img className="w-100" src={movie.Poster} alt={movie.Title} />
    </Col>
  );
}

export default SingleMovie;
