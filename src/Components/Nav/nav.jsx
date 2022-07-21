import React, { useState } from "react";
import hamburger from "../../Assets/Icons/hamburger.svg";
import Hamburger from "../HamburgerModal/HamburgerModal";
import "./nav.scss";

function Nav() {
  const [showHamModal, setShowHamModal] = useState(false);

  const handleShowModal = () => {
    console.log(showHamModal)
    setShowHamModal(!showHamModal)
  }

  return (
    <div className="nav">
      <section className="nav__bigBox">
      <h3 className="nav__title">MAC Risk Services</h3>
        <div className="nav__cta">
          <img src={hamburger} alt="hamburger menu icon" onClick={handleShowModal} className="nav_hamburgerButton" />
          {showHamModal ? <Hamburger showHamModal={showHamModal} setShowHamModal={setShowHamModal} handleShowModal={handleShowModal}/> : null}
        </div> 
      </section>
    </div>
  );
}

export default Nav;
