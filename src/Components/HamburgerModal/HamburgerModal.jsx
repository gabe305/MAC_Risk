import React from "react";

function HamburgerModal(showHamModal, setShowHamModal) {
  
  const handleClick = () => {
    console.log()
    showHamModal.setShowHamModal(!showHamModal.showHamModal)
  }

  return (
    <>
      <ul className="ham__list">
        <li className="ham__item"><a href="#top" onClick={handleClick} className="ham__link">Home</a></li>
        <li className="ham__item"><a href="#services" onClick={handleClick} className="ham__link">Services</a></li>
        <li className="ham__item"><a href="#whoweare" onClick={handleClick} className="ham__link">Who We Are</a></li>
        <li className="ham__item"><a href="#contact" onClick={handleClick} className="ham__link">Contact</a></li>
      </ul>
    </>
  );
}

export default HamburgerModal;
