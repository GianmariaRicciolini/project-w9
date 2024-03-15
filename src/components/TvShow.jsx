import React from "react";
import { ButtonGroup, Dropdown, Button, Container } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function TVShows() {
  return (
    <Container fluid className="d-flex justify-content-between bg-dark pb-3">
      <div className="d-flex align-items-center">
        <h2 className="m-0 text-light">TV Shows</h2>
        <ButtonGroup role="group">
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>
      <ButtonGroup>
        <Button className="bg-dark border-0 text-light">
          <Grid className="icons" />
        </Button>
        <Button className="bg-dark border-0 text-light">
          <Grid3x3 className="icons" />
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default TVShows;
