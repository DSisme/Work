import "./WhatWeCanDoComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Parallax } from "react-parallax";

function WhatWeCanDoComponent() {
  return (
    <Parallax bgImage="/img/background.png" strength={200}>
      <div className="whatwecando">
        <Card className="whatwecando-cards" data-aos="fade-left">
          <Card.Body>
            <Card.Title>
              Before coming to our office, please kindly consider following
              questionnaire:
            </Card.Title>
            <Card.Text>
              Q1: Did you receive their final (or second) vaccination dose more
              than 14 days ago?
            </Card.Text>
            <Card.Text>
              Q2: Do you have any of the following symptoms?
              <br />
              •Fever and/or chills
              <br />
              •New onset of cough or worsening chronic cough
              <br />
              •Shortness of breath•Decrease or loss of sense of taste or smell
            </Card.Text>
            <Card.Text>
              Q3: Have you tested positive for COVID-19 in the past 10 days or
              have you been told you should be isolating?
            </Card.Text>
            <Card.Text>
              Q4: Did you travel outside of Canada in the past 14 days?
            </Card.Text>
            <Card.Text>
              Q5: Have you had close contact with a confirmed case of COVID-19
              without wearing appropriate PPE?{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Parallax>
  );
}

export default WhatWeCanDoComponent;
