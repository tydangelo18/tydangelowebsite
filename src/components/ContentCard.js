import styled from "styled-components";

export default function ContentCard({ children, height, bgImage }) {
  return (
    <StyledCard height={height} bgImage={bgImage}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border-radius: 12px;
  border: 1px solid #ccc; // Light gray border
  height: ${(props) => props.height || "30em"}; // Fixed height
  width: ${(props) =>
    props.width || "100%"}; // Dynamic width with default value
  display: flex; // Optional, for inner content alignment
  background-image: ${(props) =>
    props.bgImage || "linear-gradient(to right, white, white)"}; // gradient background
  margin: 0.15em 0 1em 0;
  padding: 2.25em;
`;
