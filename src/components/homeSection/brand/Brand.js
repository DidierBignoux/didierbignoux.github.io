import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

import OwlCarousel from './node_modules/react-owl-carousel';  
import './node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import './node_modules/owl.carousel/dist/assets/owl.theme.default.css';


function Brand() {

  return (
    <section className="brands-area">
      <div className="container">
        <div className="brand-wrap">
          <OwlCarousel className="row align-items-center active-brand-carusel justify-content-start no-gutters" 
                 items={5}
                 loop={ true}
                 autoplayHoverPause= {true}
                 autoplay= {true}
                
          >
            <div className="col single-brand">
              <Link to ="/#" target="_blank">
                <img className="mx-auto" src={require("../../Assets/img/brand/b1.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../Assets/img/brand/b2.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../Assets/img/brand/b3.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../Assets/img/brand/b4.png")} alt="" />
              </Link>
            </div>
            <div className="col single-brand">
              <Link to ="/#">
                <img className="mx-auto" src={require("../../Assets/img/brand/b5.png")} alt="" />
              </Link>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Brand;
