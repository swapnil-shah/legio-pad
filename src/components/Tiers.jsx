import React from "react";
import { GiBarbute } from "react-icons/gi";
import { GiBrutalHelm } from "react-icons/gi";
import { GiKenkuHead } from "react-icons/gi";
import { GiVisoredHelm } from "react-icons/gi";

const tiersData = [
  {
    title: "Legio",
    subtitle: "2500 Points",
    allocation: "70% of allocation",
    icon: <GiBrutalHelm />,
  },
  {
    title: "Gladiator ",
    subtitle: "1500 Points",
    allocation: "20% of allocation",
    icon: <GiBarbute />,
  },
  {
    title: "Spectator ",
    subtitle: "500 Points",
    allocation: "7% of allocation",
    icon: <GiKenkuHead />,
  },
  {
    title: "Civilian ",
    subtitle: "100 Points",
    allocation: "3% of allocation",
    icon: <GiVisoredHelm />,
  },
];
function Tiers() {
  return (
    <section id="tiers" className="pb-4">
      <div className="container">
        <div className="title">
          <h3>Tiers</h3>
        </div>
        <div className="about-text text-center">
          <p>
            Points will be determined by Staking and LP-Staking point
            multipliers. Multipliers will be decided once LegioPad goes live on
            DEX.
          </p>
        </div>
        <div className="resume-box row">
          {tiersData.map((tier, i) => (
            <div
              className="tiers-row col-md-5 text-center text-md-start row"
              key={i}
            >
              <div className="col-sm-12 col-md-8 order-last order-md-first">
                <h4 className="text-capitalize mb-2 fs-1">{tier.title}</h4>
                <p className="mb-0 fw-normal fs-5">{tier.subtitle}</p>
                <p className="mb-0">
                  <small>{tier.allocation}</small>
                </p>
              </div>
              <div className="col-sm-12 col-md-4 order-first order-md-last">
                {tier.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tiers;
