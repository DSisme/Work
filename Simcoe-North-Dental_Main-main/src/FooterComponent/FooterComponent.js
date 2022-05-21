import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="FooterComponent">
      <div className="FooterComponent-mask">
        <div className="FooterComponent-main">
          {/* Colum1 */}
          <div className="FooterComponent-service">
            <h2>Service</h2>
            <a href="/services">Teeth cleaning and gum diseases</a>
            <a href="/services">Fillings</a>
            <a href="/services">Extractions</a>
            <a href="/services">Sedation</a>
            <a href="/services">Crowns and Veneers</a>
            <a href="/services">Bridges and Dentures</a>
            <a href="/services">Dental implants</a>
            <a href="/services">Dental emergencies</a>
            <a href="/services">Root canal treatment</a>
            <a href="/services">Teeth whitening</a>
          </div>
          {/* Colum2 */}
          <div className="FooterComponent-for-small-screen">
            <div className="FooterComponent-Practice">
              <h2>Practice</h2>
              <a className="pratice" href="/home">
                Home
              </a>
              <a className="pratice" href="/about">
                About
              </a>
              <a className="pratice" href="/register">
                New Patients
              </a>
            </div>

            {/* Colum4 */}
            <div className="FooterComponent-review">
              <h2>Review US</h2>

              <a href="https://www.google.com/" id="googlesearch">
                Google
              </a>
              <a href="https://www.facebook.com//" id="facebookSocial">
                Facebook
              </a>
            </div>
          </div>
          {/* Colum3 */}
          <div className="FooterComponent-Office">
            <h2>Office</h2>
            <p>Call or text:</p>
            <p>(913)_491_6663</p>
            <a href="https://www.google.com/maps" id="googlemaps">
              Get Driection
            </a>
            <p>Ontario, Scarborough, Steeles Avenue East </p>
          </div>
        </div>
        {/* Colum5 */}
        <div className="FooterComponent-Social">
          <div className="icon-container">
            <a
              className="icon"
              href="https://www.youtube.com/"
              id="youtubeSocial"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          <div className="icon-container">
            <a
              className="icon"
              href="https://www.facebook.com/"
              id="facebookSocial"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <div className="icon-container">
            <a className="icon" href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="icon-container">
            <a
              className="icon"
              href="https://www.instagram.com/"
              id="instagramSocial"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="FooterComponent-copyright">
        &copy; Simcoe North Dental
        <img
          className="FooterComponent-copyright-img"
          src="/img/logo.png"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default FooterComponent;
