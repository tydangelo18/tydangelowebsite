import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailsCard from "./cards/DetailsCard";
import ImageCard from "./cards/ImageCard";
import WorkCard from "./cards/WorkCard";
import { groupedCards } from "./utils/utils";

export default function Body() {
  return (
    <Container>
      <section id="home">
        <Row>
          <Col md={8}>
            <DetailsCard
              title={
                "Hello, I'm Ty, a software engineer with 3 years of experience."
              }
              description={
                "I am a creative designer, lifelong learner, and AI enthusiast"
              }
              marginTop={".5em"}
              bgImage={"linear-gradient(to right, #FDFCFB, #E5C79F)"}
              color={"black"}
            />
          </Col>
          <Col md={4}>
            <ImageCard />
          </Col>
        </Row>
      </section>

      {/* Work Cards */}
      <section id="work">
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
                    hoverColor={card.hoverColor}
                    externalLink={card.externalLink}
                  />
                </Col>
              ))}
            </Row>
          );
        })}
      </section>

      <section id="contact">
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
      </section>
    </Container>
  );
}
