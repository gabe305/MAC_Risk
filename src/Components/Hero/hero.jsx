import React from "react";
import book from "../../Assets/Icons/book.svg"
import market from "../../Assets/Icons/market.svg"
import medal from "../../Assets/Icons/medal.svg"
import people from "../../Assets/Icons/people.svg"
import "./hero.scss";

function hero() {
  return (
    <div className="hero">
      <div className="hero__box">
        <h2 className="hero__title">First-Class Risk Services</h2>
        <p className="hero__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#contact">
          <button className="hero__button">Contact Us</button>
        </a>
        <section className="hero__cardBox">
          <div className="hero__cards">
            <img src={book} className="hero__icon" alt=""/>
            <div>Lorem Ipsum</div>
          </div>
          <div className="hero__cards">
            <img src={market} className="hero__icon" alt=""/>
            <div>Lorem Ipsum</div>
          </div>
          <div className="hero__cards">
            <img src={medal} className="hero__icon" alt=""/>
            <div>Lorem Ipsum</div>
          </div>
          <div className="hero__cards">
            <img src={people} className="hero__icon" alt=""/>
            <div>Lorem Ipsum</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default hero;
