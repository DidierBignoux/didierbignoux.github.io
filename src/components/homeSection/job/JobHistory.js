import React from "react";
import { Link } from "react-router-dom";

import ReactWOW from "react-wow";

function JobHistory() {
  return (
    <section className="job-area section-gap-top section-gap-bottom-90">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-12">
            <div className="section-title">
              <ReactWOW animation="fadeInRight" duration="2s">
                <h2>Job History</h2>

                <p>
                  My career has taken a natural progression from client
                  websites, to template cards, to UI templates, to UX design, to
                  complex analytical UX design. 
                </p>
              </ReactWOW>
            </div>
          </div>
        </div>

        <div className="row">
          <ReactWOW animation="fadeInUp" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Stella Telecom</h4>
                    <p>Webmaster</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Aug '18 to Present"
                    >
                      <span>A</span>
                      <span>u</span>
                      <span>g</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>&nbsp;</span>
                      <span>t</span>
                      <span>o</span>
                      <span>&nbsp; </span>
                      <span>P</span>
                      <span>r</span>
                      <span>e</span>
                      <span>s</span>
                      <span>e</span>
                      <span>n</span>
                      <span>t</span>
                    </Link>
                  </div>
                </div>
                <ReactWOW animation="fadeIn" duration="2s">
                  <div className="bottom-sec">
                    I am in charge of the proper functioning, improvement and or
                    revolt of existing tools. Realization of the new tools, site
                    for customers and also developer platforms for our
                    collaborator.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Linkeo Agence Web</h4>
                    <p>Webmaster</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Dec '15 to Jul '18"
                    >
                      <span>D</span>
                      <span>e</span>
                      <span>c</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>&nbsp;</span>
                      <span>t</span>
                      <span>o</span>
                      <span>&nbsp; </span>
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>8</span>
                    </Link>
                  </div>
                </div>
                <ReactWOW animation="fadeIn" duration="2s">
                  <div className="bottom-sec">
                    Responsible for the creation, programming and professional
                    website management for small and medium-sized enterprises.
                    Responsible quality and content control of sites Web.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Xtreme Pub Advertising</h4>
                    <p>Graphic Designer</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Jun '15 to Dec '15"
                    >
                      <span>D</span>
                      <span>e</span>
                      <span>c</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>&nbsp;</span>
                      <span>t</span>
                      <span>o</span>
                      <span>&nbsp; </span>
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>8</span>
                    </Link>
                  </div>
                </div>
                <ReactWOW animation="fadeIn" duration="2s">
                  <div className="bottom-sec">
                    I had the opportunity to develop my skills in advertising,
                    as the promotion of a particular product (the juices of the
                    brand ' Sunny’) in the press and radio.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Open University of Mauritius</h4>
                    <p>Intern Webmaster</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Fev '15 to Avril '15"
                    >
                      <span>D</span>
                      <span>e</span>
                      <span>c</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>&nbsp;</span>
                      <span>t</span>
                      <span>o</span>
                      <span>&nbsp; </span>
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>&nbsp;</span>
                      <span>'</span>
                      <span>1</span>
                      <span>8</span>
                    </Link>
                  </div>
                </div>
                <ReactWOW animation="fadeIn" duration="2s">
                  <div className="bottom-sec">
                    I contributed to the redesign of the website of the
                    University by graphically consolidating and bringing
                    innovative idea
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    </section>
  );
}

export default JobHistory;
