import React from "react";
// import { Link } from "react-router-dom";

import ReactWOW from "react-wow";

const windowHeight = window.innerHeight;

class HomeHeader extends React.Component {



componentDidMount(){
  window.scrollTo(0,0)
}

  
onClick =() =>{
  window.location.reload()
}
  render() {
    return (
      <section className="home-banner-area">
        <div className="container">
          <div className="row d-flex align-items-center" style={{height: windowHeight}} >
            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
              <ReactWOW animation="bounceIn" duration="1s">
                <div className="me">It's me</div>
              </ReactWOW>
              <ReactWOW animation=" fadeInUp" duration="1.5s">
                <h1>Bignoux Didier</h1>
              </ReactWOW>
              <ReactWOW
              animation="fadeInUp"
              duration="2s"
             
              >
              <div
                className="designation mb-50"                
              >
                I'm a Mauritian Republic based
                <span className="designer"> Web Designer </span>
                and 
                <span className="developer"> Front‑end Developer </span>
                focused on crafting clean & user‑friendly experiences.

              </div>

              </ReactWOW>

   
              <ReactWOW animation="fadeIn" duration="2s" >
              <button className="primary-btn" data-text="Hire Me" onClick={this.onClick}>
                <span>H</span>
                <span>i</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
              </button>
              </ReactWOW>
            </div>

            <div className="banner-img col-lg-6 col-md-6 align-self-end">
            <ReactWOW animation="fadeInDown" duration="1s">
              <img
                className="img-fluid"
                src={require("../../Assets/img/banner-img.png")}
                alt=""
              />
              </ReactWOW>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeHeader;
