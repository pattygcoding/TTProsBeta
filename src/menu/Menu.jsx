import React, { useState } from "react";

import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { DarkLightMode } from "../components/dark-light-mode";
import text from '../config/text.json';
import "./Menu.css";

const Menu = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {text.meta.logo}
          </Link>
          <div className="d-flex align-items-center">
          <DarkLightMode />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">{text.menu.home}</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/request-package" className="my-3">{text.menu.request_package}</Link>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/gallery" className="my-3">{text.menu.gallery}</Link>
                  </li>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">{text.menu.about_us}</Link>
                  </li>
                  <li className="menu_item">
                  <a onClick={handleToggle} href={text.links.facebook} target="_blank" rel="noopener noreferrer" className="my-3">
  {text.menu.facebook}
</a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">

            <p className="copyright m-0">{text.watermark}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Menu;
