import React from "react";
import "../styles/ProjectCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bol from "./bol.jpg";
import shareplate from "./shareplate.jpg";

const ProjectCards = () => {
  return (
    <div className="ProjectCards">
      {
        // project one (bol)
      }
      <div className="cardDiv">
        <div className="projectOne">
          <div className="container" id="bolPic">
            <img src={bol} alt="bol" className="image"></img>
            <img src={bol} alt="bol" className="altimage"></img>
          </div>
          <div className="projectContent">
            <div className="projectTitle">
              <h2>bol</h2>
            </div>
            <div className="projectDesc">
              <p>
                A MERN stack application that tracks different bowling metrics
                for users to track improvement of their game.
              </p>
            </div>
            <div className="projectdividerDiv">
              <hr className="projectDivider" />
            </div>
            <div className="projectStack">
              <p>
                MongoDB, Express.js, React, Node.js, Mongoose, Redux, Chart.js.{" "}
              </p>
            </div>
            <div className="projectLinks">
              <a href="https://calm-thicket-62947.herokuapp.com/" target="null">
                <FontAwesomeIcon
                  className="linkBtn"
                  icon={["fas", "link"]}
                  size="2x"
                />
              </a>
              <a href="https://github.com/tydangelo18/bol" target="null">
                <FontAwesomeIcon
                  className="githubBtn"
                  icon={["fab", "github"]}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        // project two (SharePlate)
      }
      <div className="cardDiv">
        <div className="projectOne">
          <div className="container" id="bolPic">
            <img src={shareplate} alt="shareplate" className="image"></img>
            <img src={shareplate} alt="shareplate" className="altimage"></img>
          </div>
          <div className="projectContent">
            <div className="projectTitle">
              <h2>Shareplate.</h2>
            </div>
            <div className="projectDesc">
              <p>
                A social media application for foodies to share their “meal of
                the day” and interact with other users’ posts. Currently in
                design and development. See Figma link below!
              </p>
            </div>
            <div className="projectdividerDiv">
              <hr className="projectDivider" />
            </div>
            <div className="projectStack">
              <p>
                Figma, Node.js, Express.js, PostgreSQL, React Native,
                Typescript, Docker.{" "}
              </p>
            </div>
            <div className="projectLinks">
              <a
                href="https://www.figma.com/design/hxKklz94cKNruozfwYHkc4/SharePlate?node-id=0-1&m=dev&t=E6X9CPk0iIsdcHoz-1"
                target="null"
              >
                <FontAwesomeIcon
                  className="linkBtn"
                  icon={["fab", "figma"]}
                  size="2x"
                />
              </a>
              <a
                href="https://github.com/tydangelo18/shareplate-api-server"
                target="null"
              >
                <FontAwesomeIcon
                  className="githubBtn"
                  icon={["fab", "github"]}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
