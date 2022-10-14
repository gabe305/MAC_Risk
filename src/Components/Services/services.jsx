import React from "react";
import briefcase from "../../Assets/Icons/briefcase.svg"
import market from "../../Assets/Icons/market.svg"
import graph from "../../Assets/Icons/graph.svg"
import book from "../../Assets/Icons/book.svg"
import "./services.scss";

function services() {
  return (
    <div className="services" id="services">
      <section className="services__cardBox">
        <div className="services__card">
          <img src={briefcase} alt="" className="services__icon" />
          <p className="services__heading">Services</p>
          <p className="services__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
        </div>
        <div className="services__card">
          <img src={market} alt="" className="services__icon" />
          <p className="services__heading">Business</p>
          <p className="services__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. </p>
        </div>
        <div className="services__card">
          <img src={graph} alt="" className="services__icon" />
          <p className="services__heading">Trends</p>
          <p className="services__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
        </div>
        <div className="services__card">
          <img src={book} alt="" className="services__icon" />
          <p className="services__heading">Litigation</p>
          <p className="services__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. </p>
        </div>
      </section>
    </div>
  );
}

export default services;
