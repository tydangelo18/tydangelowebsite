import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Navigation() {
  return (
    <Container style={{ display: "flex", justifyContent: "flex-end" }}>
      <Row>
        <Col md={4}>
          <p>Home</p>
        </Col>
        <Col md={4}>
          <p>Work</p>
        </Col>
        <Col md={4}>
          <p>Contact</p>
        </Col>
      </Row>
    </Container>
  );
}
