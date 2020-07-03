import React from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

function About() {
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  const updateHeight = () => {
    setHeight(window.innerHeight);
  };
  return (
    <section className="about-area section-gap" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 about-left">
          <ReactWOW animation="fadeInUp" duration="1.5s" >
            <img
              className="img-fluid"
              src={require("../../../Assets/img/about-img.png")}
              alt=""
            />
            </ReactWOW>
          </div>
          <div className="col-lg-5 col-md-12 about-right">
            <div className="section-title">
            <ReactWOW animation="fadeInRight" duration="1.5s">
              <h2>about myselt</h2>
              </ReactWOW>
            </div>
            <ReactWOW animation="fadeIn" duration="3s" >
              <div className="mb-50">
                <p>
                  Computers have been in my life since I was a child and I
                  always liked everything related to pixels, so I started
                  designing at a very young age, most of my skills and knowledge
                  are self-taught. I have a complete understanding of Photoshop,
                  Illustrator, Visual Studio Code and the latest technologies
                  and languages of the Web (HTML, CSS and Javascript /React). I
                  enjoy turning complex problems into simple, beautiful and
                  intuitive designs.
                </p>
                <p>
                  I am passionate about UI/UX design that improves the lives of
                  those around me. My career began in advertising agency
                  designing website mockup and I have arrived with 4 years of
                  professional experience. I am also the founder of <a href="https://www.drunkdesign.mu/" target="_blank">Drunk Design,</a> a company that provides Graphic and Web development as
                  a Service.
                </p>
                {/* <div>{`Windo height = ${height}`}</div> */}
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
