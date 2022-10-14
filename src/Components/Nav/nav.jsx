import React, { useState, useEffect } from "react";
import hamburger from "../../Assets/Icons/hamburger.svg";
import Hamburger from "../HamburgerModal/HamburgerModal";
import "./nav.scss";
import { useMediaQuery } from "react-responsive"

function Nav() {
  const [showHamModal, setShowHamModal] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1049px)'});

  const handleShowModal = () => {
    setShowHamModal(!showHamModal)
  }

  useEffect(() => {
    if(showHamModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }, [showHamModal, setShowHamModal])

  if(isDesktop) {
    return (
      <div className="nav">
        <section className="nav__bigBox">
          <div className="nav__top-container">
            <h3 className="nav__title">MAC Risk Services</h3>
            {showHamModal ? <Hamburger showHamModal={showHamModal} setShowHamModal={setShowHamModal}/> : null}
            <img src={hamburger} alt="hamburger menu icon" onClick={handleShowModal} className="nav__hamburgerButton" />
          </div>
        </section>
      </div>
    )
  } else {
    return(
      <div className="nav">
        <section className="nav__bigBox">
          <div className="nav__top-container">
            <h3 className="nav__title">MAC Risk Services</h3>
            <img src={hamburger} alt="hamburger menu icon" onClick={handleShowModal} className="nav__hamburgerButton" />
          </div>
          {showHamModal ? <Hamburger showHamModal={showHamModal} setShowHamModal={setShowHamModal}/> : null}
        </section>
      </div>
    )
  }  

}

export default Nav;
