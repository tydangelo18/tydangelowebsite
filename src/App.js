import React from "react";
import Portfolio from "./components/Portfolio";
import styled from "styled-components";

export default function App() {
  return (
    <AppBody>
      <Portfolio />
    </AppBody>
  );
}

const AppBody = styled.div`
  margin: 1% 18% 5% 18%;
`;
