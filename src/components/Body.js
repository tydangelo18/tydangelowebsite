import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailsCard from "./DetailsCard";
import ImageCard from "./ImageCard";
import WorkCard from "./WorkCard";
import { groupedCards } from "./utils";

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
            color={"black"}
          />
        </Col>
        <Col md={4}>
          <ImageCard />
        </Col>
      </Row>

      {/* Work Cards */}
      {groupedCards.map((group, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {group.map((card, colIndex) => (
              <Col md={6} key={colIndex}>
                <WorkCard
                  title={card.title}
                  description={card.description}
                  bgImage={card.backgroundImage}
                  color={card.color}
                />
              </Col>
            ))}
          </Row>
        );
      })}

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
            color={"black"}
          />
        </Col>
      </Row>
    </Container>
  );
}
