import React, { useState } from "react";
import hamburger from "../../Assets/Icons/hamburger.svg";
import Hamburger from "../HamburgerModal/HamburgerModal";
import "./nav.scss";

function Nav() {
  const [showHamModal, setShowHamModal] = useState(false);

  const handleShowModal = () => {
    setShowHamModal(!showHamModal)
  }

  return (
    <div className="nav">
      <section className="nav__bigBox">
        <div className="nav__top-container">
          <h3 className="nav__title">MAC Risk Services</h3>
          <img src={hamburger} alt="hamburger menu icon" onClick={handleShowModal} className="nav__hamburgerButton" />
        </div>
        {showHamModal ? <Hamburger showHamModal={showHamModal} setShowHamModal={setShowHamModal}/> : null}
      </section>
    </div>
  );
}

export default Nav;
