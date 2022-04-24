import React from "react";
import "./nav.scss";

function nav() {
  return (
    <div className="nav">
      <section className="nav__bigBox">
        <h3 className="nav__title">MAC Risk Services</h3>
        <div className="nav__cta">
          <p>Home</p>
          <p className="nav__cta--contact">Contact</p>
        </div>
      </section>
    </div>
  );
}

export default nav;
