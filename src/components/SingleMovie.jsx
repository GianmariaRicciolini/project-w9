import React, { Component } from "react";
import { Col, Spinner } from "react-bootstrap";

class SingleMovie extends Component {
  state = {
    loading: true,
  };

  GrowSpinner = () => {
    return <Spinner animation="grow" />;
  };

  imageLoading = () => {
    this.setState({ loading: false });
  };

  render() {
    const { movie } = this.props;
    const { loading } = this.state;

    return (
      <Col xs={12} sm={6} md={4} xl={2} className="text-center pb-3">
        {loading && this.GrowSpinner()}
        <img
          className="w-100"
          src={movie.Poster}
          alt={movie.Title}
          onLoad={this.imageLoading}
          style={{ display: loading ? "none" : "block" }}
        />
      </Col>
    );
  }
}

export default SingleMovie;
