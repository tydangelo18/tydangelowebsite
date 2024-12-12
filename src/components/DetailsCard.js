import React from "react";
import ContentCard from "./ContentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";
import Mailto from "./Mailto";

export default function DetailsCard({
  title,
  description,
  email,
  marginTop,
  height,
  bgImage,
}) {
  return (
    <ContentCard height={height} bgImage={bgImage}>
      <FlexContainerColumn>
        <Title>{title}</Title>
        <Description style={{ marginTop: marginTop }}>
          {description}
        </Description>
        {email && <p>{email}</p>}
        <FlexContainerRow>
          <Mailto email={"tydangelo18@gmail.com"}>
            <ContactButton>Contact Me</ContactButton>
          </Mailto>
          <a
            href="https://github.com/tydangelo18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton hoverColor="#171515">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </SocialButton>
          </a>

          <a
            href="https://www.linkedin.com/in/tydangelo18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialButton hoverColor="#0077B5">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </SocialButton>
          </a>
        </FlexContainerRow>
      </FlexContainerColumn>
    </ContentCard>
  );
}

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FlexContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  gap: 0.75em;
`;

const Title = styled.h1`
  text-wrap: pretty;
  padding-right: 4em;
`;

const Description = styled.p`
  text-wrap: pretty;
  padding-right: 10em;
`;

const ContactButton = styled.button`
  margin-right: 0.75em;
  background-color: black;
  color: white;
  width: 10em;
  height: 3em;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: #454545;
  }
`;

const SocialButton = styled.button`
  margin-right: 0.75em;
  margin-right: 0.75em;
  background-color: white;
  color: black;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: ${(props) => props.hoverColor};
  }
`;
