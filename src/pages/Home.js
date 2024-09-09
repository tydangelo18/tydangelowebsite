import React from "react";
// import { Link } from 'react-router-dom';
import "../styles/Home.css";
import Icons from "../components/Icons";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <section className="homeSection">
        <header>
          <Navbar />
        </header>
        <div className="content">
          <div className="info">
            <h2>
              Ty D'Angelo <br />
              <span>Software Engineer</span>
            </h2>
            <p>
              I am a software engineer in Austin, TX with professional
              experience in Java, Typescript, Javascript, React, PostgreSQL,
              React Native, Redux, HTML, CSS, MySQL, Node.js, Express.js,
              GraphQL, MongoDB, Cypress, Docker, CI/CD Pipelines and Kubernetes.
              I am a co-founding engineer at eCare-Software, a start-up that
              provides solutions to various sectors such as behavioral group
              homes, roadside assistance and university mentorship. This is
              where I learned how to take a product from 0 to 1.
            </p>
            {
              // This will be a <Link /> to my Resume
            }
            <a
              href="https://docs.google.com/document/d/1AkzlB9kHWuJ3AqMC1kHFsWLysljnbeYmSTvM2lIGb5M/edit?usp=sharing"
              className="info-btn"
              target="null"
            >
              View CV
            </a>
          </div>
        </div>
        <div className="iconsdividerDiv">
          <hr className="iconsDivider" />
        </div>
        <div className="media-icons">
          <Icons />
        </div>
      </section>
    </div>
  );
}
