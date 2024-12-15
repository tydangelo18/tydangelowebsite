import styled from "styled-components";

export default function ContentCard({
  children,
  height,
  bgImage,
  padding,
  color,
}) {
  return (
    <StyledCard
      height={height}
      bgImage={bgImage}
      padding={padding}
      color={color}
    >
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
  color: ${(props) => props.color || "white"};

  @media (max-width: 1260px) {
    padding-right: ${(props) => props.mobilePaddingRightLarge || "1em"};
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-right: ${(props) => props.mobilePaddingRightSmall || "1em"};
  }
`;
