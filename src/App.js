import React from "react";
import Portfolio from "./components/Portfolio";
import styled from "styled-components";
import "./App.css";

export default function App() {
  return (
    <AppBody>
      <Portfolio />
    </AppBody>
  );
}

const AppBody = styled.div`
  margin: 1% 18% 5% 18%;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
