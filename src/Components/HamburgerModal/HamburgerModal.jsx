import React from "react";
import "./HamburgerModal.scss"

function HamburgerModal(showHamModal, setShowHamModal) {
  
  const handleClick = () => {
    console.log()
    showHamModal.setShowHamModal(!showHamModal.showHamModal)
  }

  return (
    <div className="ham">
      <ul className="ham__list">
        <li className="ham__item"><a href="#top" onClick={handleClick} className="ham__link">Home</a></li>
        <li className="ham__item"><a href="#services" onClick={handleClick} className="ham__link">Services</a></li>
        <li className="ham__item"><a href="#whoweare" onClick={handleClick} className="ham__link">Who We Are</a></li>
        <li className="ham__item"><a href="#contact" onClick={handleClick} className="ham__link">Contact</a></li>
      </ul>
    </div>
  );
}

export default HamburgerModal;
