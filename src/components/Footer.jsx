import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Facebook, TwitterX, Instagram, Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className="bg-dark pt-5">
      <Row className="justify-content-center ">
        <Col xs={12} md={6}>
          <Row>
            <Col className="mb-2">
              <Button className="bg-dark border-0 text-secondary">
                <Facebook />
              </Button>
              <Button className="bg-dark border-0 text-secondary">
                <Instagram />
              </Button>
              <Button className="bg-dark border-0 text-secondary">
                <TwitterX />
              </Button>
              <Button className="bg-dark border-0 text-secondary">
                <Youtube />
              </Button>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4  text-secondary">
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button size="sm" className="btn bg-dark rounded-0 mt-3 text-secondary border-secondary">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
