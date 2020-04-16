import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

import ReactWOW from "./node_modules/react-wow";

function JobHistory() {
  return (
    <section className="job-area section-gap-top section-gap-bottom-90">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Job History</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <ReactWOW animation="fadeIn" duration="2s" >
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Intern Designer</h4>
                    <p>Old Bird IT, New Yorkt</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Jul '15 to Present"
                    >
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>t</span>
                      <span>o</span>
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
                    All users on MySpace will know that there are millions of
                    people out there. Every day besides. All users on My will
                    know that there are millions of people out of the field
                    there.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Intern Designer</h4>
                    <p>Old Bird IT, New Yorkt</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Jul '15 to Present"
                    >
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>t</span>
                      <span>o</span>
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
                <ReactWOW animation="fadeIn" duration="2s" >
                  <div className="bottom-sec">
                    All users on MySpace will know that there are millions of
                    people out there. Every day besides. All users on My will
                    know that there are millions of people out of the field
                    there.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="2s">
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Intern Designer</h4>
                    <p>Old Bird IT, New Yorkt</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Jul '15 to Present"
                    >
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>t</span>
                      <span>o</span>
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
                <ReactWOW animation="fadeIn" duration="2s" >
                  <div className="bottom-sec">
                    All users on MySpace will know that there are millions of
                    people out there. Every day besides. All users on My will
                    know that there are millions of people out of the field
                    there.
                  </div>
                </ReactWOW>
              </div>
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeIn" duration="2s" >
            <div className="col-lg-6">
              <div className="single-job">
                <div className="top-sec d-flex justify-content-between">
                  <div className="top-left">
                    <h4>Intern Designer</h4>
                    <p>Old Bird IT, New Yorkt</p>
                  </div>
                  <div className="top-right">
                    <Link
                      to="/#"
                      className="primary-btn"
                      data-text="Jul '15 to Present"
                    >
                      <span>J</span>
                      <span>u</span>
                      <span>l</span>
                      <span>'</span>
                      <span>1</span>
                      <span>5</span>
                      <span>t</span>
                      <span>o</span>
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
                <ReactWOW animation="fadeIn" duration="2s" >
                  <div className="bottom-sec">
                    All users on MySpace will know that there are millions of
                    people out there. Every day besides. All users on My will
                    know that there are millions of people out of the field
                    there.
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
