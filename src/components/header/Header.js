import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <Container>
      <Row>
        <Col xs={10} sm={10} md={7}>
          <Logo />
        </Col>
        <Col xs={2} sm={2} md={5}>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
}
