import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailsCard from "./DetailsCard";
import Pic from "./Pic";
import Shareplate from "./Shareplate";
import Bol from "./Bol";
import Kwil from "./Kwil";
import ShareplateUI from "./ShareplateUI";
import Medium1 from "./Medium1";
import Medium2 from "./Medium2";

export default function Body() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <DetailsCard
            title={
              "Hello, I'm Ty, a software engineer with 3 years of experience."
            }
            description={
              "I care a lot about design for positive impact, and enjoy creating user-centric, delightful, and human experiences"
            }
            marginTop={".5em"}
            bgImage={"linear-gradient(to right, #FDFCFB, #E2D1C3)"}
          />
        </Col>
        <Col md={4}>
          <Pic />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Shareplate />
        </Col>
        <Col md={6}>
          <Bol />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Kwil />
        </Col>
        <Col md={6}>
          <ShareplateUI />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Medium1 />
        </Col>
        <Col md={6}>
          <Medium2 />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <DetailsCard
            title={"Want to work together?"}
            description={
              "Feel free to reach out for collaborations or just a friendly hello"
            }
            marginTop={".5em"}
            email={"tydangelo18@gmail.com"}
            height={"22em"}
            bgImage={"linear-gradient(to right, #FDFCFB, #E2D1C3)"}
          />
        </Col>
      </Row>
    </Container>
  );
}
