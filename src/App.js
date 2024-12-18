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
  @media (max-width: 1500px) {
    margin: 1% 15% 5% 15%;
  }
  @media (max-width: 1200px) {
    margin: 1% 12% 5% 12%;
  }
  @media (max-width: 767px) {
    margin: 1% 5% 5% 5%;
  }
`;
