import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactLogo from "../../Assets/img/elements/react.svg"

import {
  faFacebook,
  faTwitter,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";


const socialIcon = [
  {
    id: "a",
    title: "Facebook",
    font: [faFacebook],
    url: "https://facebook.com",
  },
  {
    id: "b",
    title: "Twitter",
    font: [faTwitter],
    url: "https://twitter.com",
  },
  {
    id: "c",
    title: "Behance",
    font: [faBehance],
    url: "https://behance.com",
  },
];

class Footer extends React.Component {
  // onClick =() =>{
  //   window.location.href = {}
  // }

  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer-top flex-column">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={require("../../Assets/img/logo.png")} alt="" />
                  </Link>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer-social">
                  {socialIcon.map((icon) => (
                    <a href={icon.url} key={icon.id} target="blank">
                      <FontAwesomeIcon className="icone" icon={icon.font[0]} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text">
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              This website is made with
              <a className="mx-auto react-logo" href="https://fr.reactjs.org/" target="blank">
               
                  < ReactLogo/>
                             
              </a>
            </p>
          </div>
        </div>
       
      </footer>
    );

    // end
  }
}

export default Footer;
