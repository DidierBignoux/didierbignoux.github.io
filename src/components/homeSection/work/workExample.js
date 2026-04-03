import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// import styled from "styled-components";

import IsoTopeGrid from "react-isotope";



const cardsDefault = [
  {
    id: "a",
    title: '2D Vinyl Design',
    project: 'Client Project',
    img: [
      require('../../Assets/img/work/w1.jpg')
    ],
    filter: ["creative", "Branding", "chart"],
  },
  {
    id: "b",
    title: '2D Vinyl Design',
    project: 'Client Project',
    img: [
      require('../../Assets/img/work/w3.jpg')
    ],
    filter: ["creative", "test1", "tile"],
  },
  {
    id: "c",
    title: '2D Vinyl Design',
    project: 'Client Project',
    img: [
      require('../../Assets/img/work/w2.jpg')
    ],
    filter: ["creative", "Branding", "chart"],
  },
  {
    id: "d",
    title: '2D Vinyl Design',
    project: 'Client Project',
    img: [
      require('../../Assets/img/work/w4.jpg')
    ],
    filter: ["creative", ],
  },
  
];

const filtersDefault = [
  { label: "creative", isChecked: true },
  { label: "Branding", isChecked: false },
  { label: "test1", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false },
];

export default function WorkExample() {
  const [filters, updateFilters] = useState(filtersDefault);

  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }

        return f;
      })
    );
  };

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
              {filters.map((f) => (
                <Link to='/Link' key={`${f.label}_key`}>
                  <input
                    id={f.label}
                    type="checkbox"
                    value={f.label}
                    onChange={onFilter}
                    checked={f.isChecked}
                  />
                  <label htmlFor={f.label}>{f.label}</label>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="filters-content">
          <div className="row grid">
            <IsoTopeGrid
              gridLayout={cardsDefault}          
              filters={filters}
            >
              {cardsDefault.map((card) => (
                <div
                  key={card.id}
                  className={`single-work col-lg-4 col-md-6 col-sm-12 all wow fadeInUp ${card.filter[0]}`}
                >
                  {/* <div className="tags">
                      {card.filter.map((c) => (
                        <span>{c}</span>
                      ))}
                    </div> */}

                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img
                        className="image img-fluid"
                        src={card.img[0]}
                        alt=""
                      />
                    </div>
                    <div className="middle">
                      <h4>{card.title}</h4>
                      <div className="cat">{card.project}</div>
                    </div>
                    <Link to ="/products" className="overlay"></Link>
                  </div>

                 
                </div>
              ))}
            </IsoTopeGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
