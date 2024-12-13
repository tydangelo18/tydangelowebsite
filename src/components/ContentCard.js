import styled from "styled-components";

export default function ContentCard({ children, height, bgImage, padding }) {
  return (
    <StyledCard height={height} bgImage={bgImage} padding={padding}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border-radius: 12px;
  height: ${(props) => props.height || "30em"};
  width: ${(props) => props.width || "100%"};
  display: flex;
  background-image: ${(props) =>
    props.bgImage || "linear-gradient(to left, purple, white)"};
  background-position: center;
  background-size: cover;
  margin: 0.15em 0 1em 0;
  padding: ${(props) => props.padding || "2.25em"};
`;
