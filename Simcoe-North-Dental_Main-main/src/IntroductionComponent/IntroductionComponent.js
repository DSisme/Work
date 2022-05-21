import "./IntroductionComponent.css";
import { Component } from "react";
import { Background, Parallax } from "react-parallax";

class IntroductionComponent extends Component {
  render() {
    return (
      <div
        className="introduction pattern-cross-dots-sm
      "
      >
        <div className="introduction-content">
          <h1 data-aos="fade-down">PROFESSIONAL</h1>
          <div className="hl"></div>
          <p data-aos="fade-up">
            Dr. Hu graduated from Faculty of Dentistry, University of Toronto in
            2017 with a DDS degree and started serving the local communities in
            Ontario since then. Before that, Dr. Hu had been practising as
            general dentist and prosthodontist in a leading hospital in China
            for more than 10 years after graduated with a Master degree of
            clinical medicine in Dentistry from Peking University.{" "}
          </p>
          <a href="/about">
            <button className="meetDrHu" data-aos="fade-up">
              See more
            </button>
          </a>
        </div>
        <div className="introduction-right">
          <Parallax strength={-100} className="introduction-right-parallax">
            <Background>
              <img
                className="introduction-img-1"
                src="/img/ClinicMembersPhotos/Dr_Hu_auto_x2.jpg"
                alt="Dr.Hu"
              ></img>
            </Background>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default IntroductionComponent;
