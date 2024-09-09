import React from "react";
import "../styles/Projects.css";
import ProjectCards from "../components/ProjectCards";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div>
      <section>
        <header>
          <Navbar />
        </header>
        <ProjectCards />
      </section>
    </div>
  );
}
