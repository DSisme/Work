import "./ServicesComponent.css";
import { Card } from "react-bootstrap";

function ServicesComponent() {
  return (
    <div className="servicesComponent">
      {/* <CardGroup className="cards-group"> */}
      <div className="cards-group">
        <Card>
          <div className="card-mask">
            <p>Bridges and Dentures</p>
          </div>
          <Card.Img
            variant="top"
            src="/img/services photoes/bridges and dentures 3.jpg"
          />
          <Card.Body>
            <Card.Title>Bridges and Dentures</Card.Title>
            <Card.Text>
              Missing teeth can influence your chewing function and appearance.
              Bridges and Dentures are traditional ways of restoring the missing
              teeth. Either has different pros and cons. Consult our dentists
              for more information to make your right decision.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Crowns and Veneers</p>
          </div>

          <Card.Img variant="top" src="/img/services photoes/crown.jpg" />
          <Card.Body>
            <Card.Title>Crowns and Veneers</Card.Title>
            <Card.Text>
              Crowns and Veneers are artificial dental restoration methods that
              can improve or restore the look and functions of teeth. They can
              be used on teeth with extensive structural loss or after root
              canal treatment to make them stronger, or be used to improve the
              shape or color of the teeth for the cosmetic purpose.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Dental Implants</p>
          </div>

          <Card.Img
            variant="top"
            src="/img/services photoes/dental implants.jpg"
          />
          <Card.Body>
            <Card.Title>Dental Implants</Card.Title>
            <Card.Text>
              Dental implants are made of titanium metal. They are placed into
              the jawbone to replace the roots of missing teeth. They support
              artificial replacement teeth to restore missing teeth. Comparing
              with the bridges and dentures, they have their unique advantages
              and become the main method of replacing missing teeth in recent
              years.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Extractions</p>
          </div>

          <Card.Img variant="top" src="/img/services photoes/extractions.jpg" />
          <Card.Body>
            <Card.Title>Extractions</Card.Title>
            <Card.Text>
              For hopeless teeth, they need to be taken out to reduce the risk
              of infection, pain, or even bone resorption. Sometimes, there are
              other reasons for an tooth extraction, for example, wisdom teeth
              extraction or suggestions from an orthodontist. Check with our
              dentists before you make a decision.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div className="card-mask">
            <p>Fillings</p>
          </div>

          <Card.Img variant="top" src="/img/services photoes/fillings.jpg" />
          <Card.Body>
            <Card.Title>Fillings</Card.Title>
            <Card.Text>
              Got a cavity? No worries, perhaps just a filling can solve the
              problem. We are using the latest technology, first-class material
              to fix cavities. Most important, our dental team will focus on
              every detail to achieve the best result of your fillings.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Teeth cleaning and gum diseases</p>
          </div>

          <Card.Img
            variant="top"
            src="/img/services photoes/teeth-cleanning.jpg"
          />
          <Card.Body>
            <Card.Title>Teeth cleaning and gum diseases</Card.Title>
            <Card.Text>
              Plaques and tartars accumulated around your teeth can cause gum
              diseases. Our dental team will gently remove the plaques and
              tartars from your teeth to keep or restore your gum health. For
              patients who have sensitive teeth or gums, we will provide N2O
              sedation or local anesthesia for your comfort.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Root canal treatment</p>
          </div>

          <Card.Img variant="top" src="/img/services photoes/root canal.jpg" />
          <Card.Body>
            <Card.Title>Root canal treatment</Card.Title>
            <Card.Text>
              sometimes when you have a deep cavity or cracked tooth, the pulp
              inside the tooth may be involved. To save the tooth, dentists may
              suggest root canal treatment (also called endo treatment) for it.
              Root canal treatment includes removing infected or injured pulp
              from inside the crown and roots of a tooth, then filling the roots
              with dental material. It is quite common that a crown restoration
              will be recommended to the same tooth after the root canal
              treatment.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Sedation</p>
          </div>

          <Card.Img variant="top" src="/img/services photoes/sedation.jpg" />
          <Card.Body>
            <Card.Title>Sedation</Card.Title>
            <Card.Text>
              Being anxious to see a dentist? We have N2O sedation service
              in-office, a safe and effective means to help you through the
              stressful procedures.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <div className="card-mask">
            <p>Teeth whitening</p>
          </div>

          <Card.Img
            variant="top"
            src="/img/services photoes/teeth whitening.jpg"
          />
          <Card.Body>
            <Card.Title>Teeth whitening</Card.Title>
            <Card.Text>
              Dissatisfied with your tooth color? Try our professional at-home
              teeth whitening material-- affordable, safe and effective. Enjoy
              the convenience of doing it at home and the peace of mind coming
              from our dentists’ supervision.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* </CardGroup> */}
    </div>
  );
}

export default ServicesComponent;
