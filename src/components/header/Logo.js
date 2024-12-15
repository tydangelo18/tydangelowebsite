import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <FlexRow>
      <YellowCircle />
      <p>Ty</p>
    </FlexRow>
  );
}

const YellowCircle = styled.div`
  width: 1.5em;
  height: 1.5em;
  background: linear-gradient(to right, #e5c79f 50%, #20254f 50%);
  border-radius: 50%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;
