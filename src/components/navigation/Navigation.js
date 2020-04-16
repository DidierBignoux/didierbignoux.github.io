import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink  as NavLinkHash} from "react-router-hash-link";

function Navigation() {
  return (
    <header id="header">
      <div className="container main-menu">
        <div className="row align-items-center d-flex">
          <div id="logo">
            <NavLink to="/">
              <img src={require("../../Assets/img/logo.png")} alt="" title="" />
            </NavLink>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="">
                <NavLink to="/" exact={true} activeClassName='active'>Accueil</NavLink>
              </li>
              {/* <li>
                <NavLinkHash smooth to="/#about">About</NavLinkHash>
              </li> */}
              <li>
                <NavLink to="/about" exact activeClassName='active'>About</NavLink>
              </li>
              {/* <li className="menu-has-children">
                <NavLink to="/path">Pages</NavLink>
                <ul>
                  <li>
                    <NavLink to="/toPAth">Elements</NavLink>
                  </li>
                  <li>
                    <NavLink to="/toPAth">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/toPAth">Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/toPAth">Portfolio Details</NavLink>
                  </li>
                </ul>
              </li> */}
              {/* <li className="menu-has-children">
                <NavLink to="/path">Blog</NavLink>
                <ul>
                  <li>
                    <NavLink to="/toPAth" activeClassName="active">
                      Blog Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/toPAth">Blog Single</NavLink>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
