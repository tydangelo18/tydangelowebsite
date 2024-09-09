import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faEnvelope);

export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
