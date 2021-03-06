import React from "react";
import "./hero.scss";

function hero() {
  return (
    <div className="hero">
      <div className="hero__box">
        <h2 className="hero__title">First-Class Risk Services</h2>
        <p className="hero__desc">
          Random information about Mac Risk Services maybe something like a
          motto
        </p>
        <a href="#contact">
          <button className="hero__button">Contact Us</button>
        </a>
        <section className="hero__cardBox">
          <div className="hero__cards">
            <div>Texty text texters</div>
          </div>
          <div className="hero__cards">
            <div>Texty text texters</div>
          </div>
          <div className="hero__cards">
            <div>Texty text texters</div>
          </div>
          <div className="hero__cards">
            <div>Texty text texters</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default hero;
