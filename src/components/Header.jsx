import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import { GiBrutalHelm } from "react-icons/gi";

import {
  IoLayers
} from "react-icons/io5";
import {
  FaChartPie
} from "react-icons/fa";
import {
  GiStarsStack
} from "react-icons/gi";
import { FaHome ,FaWpforms} from "react-icons/fa";

const HeaderTwo = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //Disabled body scroll when menu open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [click]);
  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header
        className={
          click
            ? "header-left header-menu-style-two menu-open"
            : "header-left header-menu-style-two"
        }
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">
                <GiBrutalHelm/>
              </Link>
            </div>
          </div>

          <Scrollspy
            className="nav nav-menu"
            items={["home", "features", "tokenomics", "tiers","cta"]}
            currentClassName="active"
            offset={-60}
          >
            <li>
              <a className="nav-link " href="#home" onClick={handleClick}>
                <FaHome />
                <span className="item">Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#features" onClick={handleClick}>
                <GiStarsStack />
                <span className="item">Features</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#tokenomics" onClick={handleClick}>
                <FaChartPie />
                <span className="item">Token Economics</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#tiers" onClick={handleClick}>
                <IoLayers />
                <span className="item">Tiers</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#cta" onClick={handleClick}>
                <FaWpforms />
                <span className="item">Apply</span>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderTwo;
