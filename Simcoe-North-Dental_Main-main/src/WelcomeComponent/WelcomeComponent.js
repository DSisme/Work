import "./WelcomeComponent.css";

function WelcomeComponent() {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <video
          className="welcome-left-video"
          src="/video/pexels-c-technical-6528836-compressed.mp4"
          loop
          autoPlay
          muted
          type="video/mp4"
        ></video>
        <div className="welcome-left-video-mask"></div>
      </div>
      <div className="welcome-right">
        <div className="welcome-right-content" data-aos="fade-left">
          <h5>Family Dentist in Oshawa</h5>
          <h1>Meet your neighbors at Simcoe North Dental</h1>
          <div className="welcome-right-button">
            <a href="/register">
              <button className="welcome-right-button-book">JOIN US NOW</button>
            </a>
            <button className="welcome-right-button-call">
              OR CALL: (905) 417-4481
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
