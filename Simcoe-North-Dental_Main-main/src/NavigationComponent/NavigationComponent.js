import "./NavigationComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { capitalize } from "@material-ui/core";

const NavigationComponent = ({
  handleLoginClick,
  userName,
  userID,
  role,
  turnOn,
}) => {
  let history = useHistory();

  const [show, setShow] = useState(true);
  const controlNavBar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  // const handlerClick = () => {
  //   handleLoginClick();
  // };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  return (
    <Nav
      className={`navigation ${show && turnOn && "navigation_hide"} ${
        !turnOn && "navigation_freeze"
      }`}
    >
      <a href="/home" className="navigation-left">
        <div>
          <img
            className="navigation-left-img"
            src="/img/Logo_with_name.png"
            alt="logo"
          ></img>
        </div>
      </a>
      <div className="navigation-right">
        <Nav className="me-auto">
          <NavDropdown
            className="navigation-right-service"
            title="Service"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/services">
              Teeth cleaning and gum diseases
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">Fillings</NavDropdown.Item>
            <NavDropdown.Item href="/services">Extractions</NavDropdown.Item>
            <NavDropdown.Item href="/services">Sedation</NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Crowns and Veneer
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Bridges and Dentures
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Dental Implants
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Dental Emergencies
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Root canal treatment
            </NavDropdown.Item>
            <NavDropdown.Item href="/services">
              Teeth whitening
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="navigation-right-about" href="/about">
            About
          </Nav.Link>
          {userName == null && (
            <Nav.Link className="navigation-right-newPatient" href="/register">
              New Patient
            </Nav.Link>
          )}
          {userName == null && (
            <button
              className="navigation-right-login"
              onClick={handleLoginClick}
            >
              <span>Login</span>
              <div className="liquid"></div>
            </button>
          )}
          {role === "doctor" && (
            <button
              className="navigation-right-login"
              onClick={() => {
                history.push(`/dashboard/doctor/${userID}`);
              }}
            >
              <span>Dr. {capitalize(userName)}</span>
              <div className="liquid"></div>
            </button>
          )}
          {role === "customer" && (
            <button
              className="navigation-right-login"
              onClick={() => {
                history.push(`/dashboard/${userID}`);
              }}
            >
              <span>{capitalize(userName)}</span>
              <div className="liquid"></div>
            </button>
          )}
          {role === "manager" && (
            <button
              className="navigation-right-login"
              onClick={() => {
                history.push(`/manager`);
              }}
            >
              <span>Administrator</span>
              <div className="liquid"></div>
            </button>
          )}
        </Nav>
      </div>
    </Nav>
  );
};

export default NavigationComponent;
