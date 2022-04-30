import React from "react";
import "./whoWeAre.scss";
import construction from "../../Assets/Images/miguel_construction.jpg";

function whoWeAre() {
  return (
    <div>
      <section className="who__bigBox">
        <h2>Who We Are</h2>
        <p>Quick and concise description of who we are and what we offer</p>
        <img
          src={construction}
          alt="Founder of MAC Risk Services in front of construction"
          className="who__const"
        />
        <h2>Why Trust Us</h2>
        <p>
          An explaination of our credentials and years of experience as well as
          what sets MAC apart from the rest
        </p>
        <ul>
          <li>advantages we can provide</li>
          <li>advantages our risk services can provide</li>
        </ul>
      </section>
    </div>
  );
}

export default whoWeAre;
