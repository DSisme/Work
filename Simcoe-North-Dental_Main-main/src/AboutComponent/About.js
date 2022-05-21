import "./About.css";
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

const TeamPage = () => {
  return (
    <div className="about-component">
      {/* <NavigationComponent /> */}
      <MDBCard className="my-5 px-5 pb-5 about-cards-group">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <div className="vertical-line"></div>
          <p className="w-responsive mx-auto mb-5">
            Our mission is to provide the highest quality, lifelong oral health
            solutions at highly competitive prices to our valued patients.
            <br /> Our dentists and staff take great pride in educating our
            patients, ensuring their comfort, and restoring their smile.
          </p>
          <MDBRow className="text-center ">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 about-card">
              <img
                tag="img"
                src="/img/ClinicMembersPhotos/Dr_Hu_auto_x3.jpeg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Dr_hu"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Thomas Hu </h5>
              <p className="text-uppercase blue-text"> DDS</p>
              <p className="grey-text">
                Dr. Hu graduated from Faculty of Dentistry, University of
                Toronto in 2017 with a DDS degree and started serving the local
                communities in Ontario since then. Before that, Dr. Hu had been
                practising as general dentist and prosthodontist in a leading
                hospital in China for more than 10 years after graduated with a
                Master degree of clinical medicine in Dentistry from Peking
                University.
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 about-card">
              <img
                tag="img"
                src="/img/ClinicMembersPhotos/Amy_office_managerx2.jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Amy"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Amy Li</h5>
              <p className="text-uppercase blue-text">Office Manager</p>
              <p className="grey-text">
                Amy Li is a graduate from the University of Toronto with a BSc
                in Psychology and Neuroscience. Her interest in the dental field
                influenced her to further her education at George Brown College,
                where she graduated with a Dental Office Administration
                certificate, with Honours, in 2010. .
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 about-card">
              <img
                tag="img"
                src="/img/ClinicMembersPhotos/img.jpeg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Dental Assistant</p>
              <p className="grey-text">
                Maria always builds strong relationships with patients and uses
                his caring attitude to reduce the stress a patient may have when
                visiting the dentist. He uses his knowledge of dentistry to
                encourage oral health in all patients. He achieved his Bachelor
                of Medicine in University of Toronto.
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5 about-card">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">Dental Hygienist</p>
              <p className="grey-text">
                Anna is a knowledgeable, experienced dental hygienist who is
                passionate about improving the oral health of the patients with
                emphasis on oral self-care education. She graduated from the
                dental hygiene program at Oxford College and graduated in the
                DMD program at Centro Escolar University, Philippines, in 2010.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      {/* <FooterComponent /> */}
    </div>
  );
};

export default TeamPage;
