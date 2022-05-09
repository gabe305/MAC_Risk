import React from "react";
import "./contact.scss";
import closeUp from "../../Assets/Images/miguel_closeup.jpg";
import Desktop from "../../Assets/Images/miguel_desk.jpg";

function contact() {
  return (
    <div className="form">
      <div className="form__bigBox">
        <img src={closeUp} alt="MAC founder" className="form__photo" />
        <img src={Desktop} alt="MAC founder" className="form__photo--desk" />
        <form className="form__box" id="contact">
          <h2>Contact us today</h2>
          <div className="form__label">
            <label>Name*</label>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form__label">
            <label>Phone Number</label>
            <input placeholder="123-456-7890" type="tel" />
          </div>
          <div className="form__label">
            <label>Email*</label>
            <input type="email" placeholder="email@address.com" required />
          </div>
          <div className="form__label">
            <label>Description*</label>
            <textarea placeholder="Brief Description" required></textarea>
          </div>
          <input type="submit" className="form__button" />
        </form>
      </div>
    </div>
  );
}

export default contact;
