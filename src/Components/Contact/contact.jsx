import React from "react";
import "./contact.scss";
import closeUp from "../../Assets/Images/miguel_closeup.jpg";
import Desktop from "../../Assets/Images/miguel_desk.jpg";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      name,
      number,
      email,
      desc
    }
    emailjs.send('MAC_Risk', 'MAC_Risk', templateParams, '3RZNs1V7ZaMJg2Q6Z').then(res => console.log(res.status))
    e.target.reset();
  }

  return (
    <div className="form">
      <div className="form__bigBox">
        <img src={closeUp} alt="MAC founder" className="form__photo" />
        <img src={Desktop} alt="MAC founder" className="form__photo--desk" />
        <form className="form__box" id="contact" onSubmit={handleSubmit}>
          <h2>Contact us today</h2>
          <div className="form__label">
            <label>Name*</label>
            <input type="text" placeholder="Full Name" required onChange={e => setName(e.target.value)}/>
          </div>
          <div className="form__label">
            <label>Phone Number</label>
            <input placeholder="123-456-7890" type="tel" onChange={e => setNumber(e.target.value)}/>
          </div>
          <div className="form__label">
            <label>Email*</label>
            <input type="email" placeholder="email@address.com" required onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="form__label">
            <label>Description*</label>
            <textarea placeholder="Brief Description" required onChange={e => setDesc(e.target.value)}></textarea>
          </div>
          <input type="submit" className="form__button"/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
