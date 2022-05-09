import React from "react";
import "./whoWeAre.scss";
import construction from "../../Assets/Images/miguel_construction.jpg";

function whoWeAre() {
  return (
    <div>
      <section className="who__bigBox">
        <div className="who__title">
          <h2>Who We Are</h2>
          <p>Quick and concise description of who we are and what we offer</p>
        </div>
        <div className="who__box">
          <img
            src={construction}
            alt="Founder of MAC Risk Services in front of construction"
            className="who__const"
          />
          <div className="who__title--second">
            <h2>Why Trust Us</h2>
            <p>
              An explaination of our credentials and years of experience as well
              as what sets MAC apart from the rest
            </p>
            <ul>
              <li>Advantages we can provide</li>
              <li>Advantages our risk services can provide</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default whoWeAre;
