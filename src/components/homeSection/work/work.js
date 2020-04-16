import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

// import { WOW } from "wowjs";

// import IsoTopeGrid from "react-isotope";


class WorkArea extends React.Component {
  // componentDidMount() {
  //   const WOW = require("wow.js");
  //   new WOW().init();
  // }
  render() {
    return (
      <section
        className="work-area section-gap-top section-gap-bottom-90"
        id="work"
      >
        <div className="container">
          <div className="row d-flex justify-content-between align-items-end mb-80">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Latest Works</h2>
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price. You may see some for
                  as low as $.17 each.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="filters">
                <ul>
                  <li className="active" data-filter=".all">
                    All Categories
                  </li>
                  <li data-filter=".branding">Branding</li>
                  <li data-filter=".creative">Creative Work</li>
                  <li data-filter=".web-design">Web Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="filters-content">
            <div className="row grid">
              <div
                className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img
                      className="image img-fluid"                      
                      src={require("../../Assets/img/work/w1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="middle">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">Client Project</div>
                  </div>                 
                  <Link
                    to ="/products"
                    className="overlay"
                   
                  ></Link>
                </div>
              </div>

              <div
                className="single-work col-lg-4 col-md-6 col-sm-12 all creative wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img
                      className="image img-fluid"                      
                      src={require("../../Assets/img/work/w2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="middle">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">Client Project</div>
                  </div>                 
                  <Link
                    to ="/products"
                    className="overlay"
                   
                  ></Link>
                </div>
              </div>

              <div
                className="single-work col-lg-4 col-md-6 col-sm-12 all  web-design branding wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="relative">
                  <div className="thumb">
                    <div className="overlay overlay-bg"></div>
                    <img
                      className="image img-fluid"                      
                      src={require("../../Assets/img/work/w3.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="middle">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">Client Project</div>
                  </div>                 
                  <Link
                    to ="/products"
                    className="overlay"
                   
                  ></Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default WorkArea;
