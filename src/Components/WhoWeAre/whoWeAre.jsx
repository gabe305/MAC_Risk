import React from "react";
import "./whoWeAre.scss";
import miguelSide from "../../Assets/Images/miguel_construction.jpg";

function whoWeAre() {
  return (
    <div id="whoweare">
      <section className="who__bigBox">
        <div className="who__title">
          <h2>Biography</h2>
          <img
            src={miguelSide}
            alt="Founder of MAC Risk Services in front of construction"
            className="who__const"
          />
          <div className="who__copy">
            <p className="who__text">Miguel began his career in the property and casualty insurance industry a little over 40 years ago. In the last 25 years, he has been dedicated to managing risk from the client's point of view: advising on what risk can be assumed or what risk must be transferred. Since 2020, he has been dedicated to the same risk management, but this time to financial risks that families can face if they do not protect themselves adequately.</p>
            <p className="who__text">Inspired by Father Michael McGivney, founder of the KofC, this task of protecting families is nothing more than continuing his legacy that he began a little over 140 years ago. For the last 35 years, Miguel and Nanette, his wife, have dedicated themselves to the service of their church in bringing music to the liturgy. The most recent 20 years he has been at St. Boniface Parish in Pembroke Pines.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default whoWeAre;
