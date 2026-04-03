import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const portfolio = [
  {
    name: "My best client",
    project: "Client Project",
    url: "about",
    img: [require("../../../Assets/img/work/w1.jpg")],
    category: ["all", "frontend", "ux-ui"],
  },
  {
    name: "My favorite case",
    project: "Client Project",
    url: "product",
    img: [require("../../../Assets/img/work/w2.jpg")],
    category: ["all", "mobile", "ux-ui"],
  },
  {
    name: "A old job",
    project: "Client Project",
    url: "product",
    img: [require("../../../Assets/img/work/w3.jpg")],
    category: ["all", "frontend", "mobile"],
  },
  {
    name: "It is a really cool website",
    project: "Client Project",
    url: "product",
    img: [require("../../../Assets/img/work/w4.jpg")],
    category: ["all", "frontend", "ux-ui", "others"],
  },
  {
    name: "Something more",
    project: "Client Project",
    url: "product",
    img: [require("../../../Assets/img/work/w5.jpg")],
    category: ["all", "others"],
  },
];

function WorkIso() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <section className="work-area section-gap-top section-gap-bottom-90" id="work">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-end mb-80">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Latest Works</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="filters">
              <ul>
                <li>
                  <a href="javascript:void(0);" active={filter === "all"} onClick={() => setFilter("all")}>
                    All Categories
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" active={filter === "frontend"} onClick={() => setFilter("frontend")}>
                    Frontend
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" active={filter === "mobile"} onClick={() => setFilter("mobile")}>
                    Mobile
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" active={filter === "ux-ui"} onClick={() => setFilter("ux-ui")}>
                    UX/UI
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" active={filter === "others"} onClick={() => setFilter("others")}>
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {projects.map((item) =>
                item.filtered === true ? (
                  <div className={`single-work col-lg-4 col-md-6 col-sm-12 all wow fadeInUp`} key={item.name}>
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg"></div>
                        <img className="image img-fluid" src={item.img[0]} alt="" />
                      </div>
                      <div className="middle">
                        <h4>{item.name}</h4>
                        <div className="cat">{item.project}</div>
                      </div>
                      <Link to={item.url} className="overlay"></Link>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkIso;
