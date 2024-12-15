import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "@emotion/styled";

export default function Navigation() {
  return (
    <Container style={{ display: "flex", justifyContent: "flex-end" }}>
      <Row>
        <Col md={4}>
          <NavigationLink href="#home">
            <p>Home</p>
          </NavigationLink>
        </Col>
        <Col md={4}>
          <NavigationLink href="#work">
            <p>Work</p>
          </NavigationLink>
        </Col>
        <Col md={4}>
          <NavigationLink href="#contact">
            <p>Contact</p>
          </NavigationLink>
        </Col>
      </Row>
    </Container>
  );
}

const NavigationLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
