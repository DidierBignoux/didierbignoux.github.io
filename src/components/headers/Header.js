import React from "react";
import { Link } from "react-router-dom";

// import { WOW } from 'wowjs';

class Header extends React.Component {
  render() {
    return (
      <section className="banner-area relative">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">{this.props.name}</h1>
              <p className="link-nav">
                <span className="box">
                  <Link to ="/">Home </Link>
                  <Link to ="/#">Blog</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Header;

