import React from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

function About() {

  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight );
  });

  const updateHeight = () => {
    setHeight(window.innerHeight)
  }
  return (
    <section className="about-area section-gap" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 about-left">
            <img
              className="img-fluid"
              src={require("../../Assets/img/about-img.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-5 col-md-12 about-right">
            <div className="section-title">
              <h2>about myselt</h2>
            </div>
            <ReactWOW animation="fadeIn" duration=".8s">
              <div className="mb-50">
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed. inappropriate behavior is often laughed off
                  as “boys will be boys,” women face higher.
                </p>
                <p>
                  That’s why it’s crucial that, as women, our behavior on the
                  job is beyond reproach. inappropriate behavior is often
                  laughed.
                </p>
                <div>{`Windo height = ${height}`}</div>

              </div>
            </ReactWOW>

            <Link to="/#" className="primary-btn white" data-text="More Info">
              <span>M</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
              <span> </span>
              <span>I</span>
              <span>n</span>
              <span>f</span>
              <span>o</span>
            </Link>
            <Link to="/#" className="primary-btn" data-text="Resume">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
