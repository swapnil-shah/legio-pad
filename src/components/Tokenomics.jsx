import React from "react";
import TokenomicsCard from "./TokenomicsCard";

const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="title">
            <h3>BattleNomics</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 ml-auto">
              <TokenomicsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
