import ContentCard from "./ContentCard";
import { Col, Container, Row } from "react-bootstrap";
import { SocialButton } from "./DetailsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function WorkCard({
  title,
  description,
  bgImage,
  color,
  hoverColor,
  externalLink,
}) {
  return (
    <ContentCard
      padding={"1.75em .25em 0em 1em"}
      bgImage={bgImage}
      color={color}
    >
      <Container>
        <Row>
          <Col sm={10}>
            <h6>{title}</h6>
            <p>{description}</p>
          </Col>
          <Col sm={2}>
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
              <SocialButton hoverColor={hoverColor} hoverBgColor={"black"}>
                <FontAwesomeIcon icon={faLink} size="lg" />
              </SocialButton>
            </a>
          </Col>
        </Row>
      </Container>
    </ContentCard>
  );
}
