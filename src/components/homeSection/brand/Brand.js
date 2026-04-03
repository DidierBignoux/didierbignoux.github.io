import React from "react";
import { Link } from "react-router-dom";

import ReactWOW from "react-wow";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Brand() {

  return (
    <section className="brands-area">
      <div className="container">
      <ReactWOW animation="fadeInUp" duration="2s" >
        <div className="brand-wrap">
          <OwlCarousel className="row align-items-center active-brand-carusel justify-content-start no-gutters" 
                 items={5}
                 loop={ true}
                 autoplayHoverPause= {true}
                 autoplay= {true}
                
          >
            <div className="col single-brand">
              <Link to ="/#" target="_blank">
                <img className="mx-auto" src={require("../../../Assets/img/brand/b1.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../../Assets/img/brand/b2.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../../Assets/img/brand/b3.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../../Assets/img/brand/b4.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../../Assets/img/brand/b5.png")} alt="" />
              </Link>
            </div>
          </OwlCarousel>
        </div>
        </ReactWOW>
      </div>
    </section>
  );
}

export default Brand;
