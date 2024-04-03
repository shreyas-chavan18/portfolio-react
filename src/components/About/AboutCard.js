import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreyas Chavan </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am a B.Tech 4th year student in Computer Engineering with honed problem-solving abilities, adept at approaching complex
            challenges analytically. Backed by good and fast learning ability, I am actively seeking opportunities to leverage my technical
            skills and contribute meaningfully.
            <br />
            <br/>
            I am percieving my BTech degree in MIT Academy of Engineering 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-Fi shows and movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
