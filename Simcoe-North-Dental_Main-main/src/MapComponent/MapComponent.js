import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./MapComponent.css";

class MapComponent extends React.Component {
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <div>
          <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 43.892795, lng: -79.262971 }}
          >
            <Marker position={{ lat: 43.892795, lng: -79.262971 }} />
          </GoogleMap>
          <div className="text-contact" data-aos="fade-up">
            <div className="text-contact-logo">
              <img src="/img/Logo_with_name.png" alt="logo"></img>
            </div>
            <div className="MapComponent-info">
              <div className="MapComponent-info-title">Our Address</div>

              <div>825 Simnoce North st</div>
              <div>ON, L3R 8J2</div>
              <div>(902) 482-1234</div>
              <div className="MapComponent-info-time">
                <div className="MapComponent-info-time-specific">
                  <div>Mon - Fri</div>
                  <div>8am - 6am</div>
                </div>

                <div className="hl"></div>
                <div className="MapComponent-info-time-specific">
                  <div>Sat - Sun</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    );
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQ7pA0ju42WUwlD9onBXhdf1h8WByeZqA&v=3.exp&libraries=geometry,drawing,places&language=en"
        loadingElement={<div className="MapComponent-element" />}
        containerElement={<div className="MapComponent-container" />}
        mapElement={<div className="MapComponent-map" />}
      />
    );
  }
}
export default MapComponent;
