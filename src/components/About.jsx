import React from "react";
import Services from "./Service";

const About = () => {
  return (
    <>
      <section  id="features">
        <div className="container">
          {/* <div className="row align-items-center justify-content-center pb-4">
            <div
              className="col-md-6"
            >
              <div className="about-illustration">
                <div className="img">
                  <div className="img-in">
                    <img src={process.env.PUBLIC_URL + "img/chain.svg"} alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Fastest EVM/eBPF Hybrid Chain</h3>
                </div>
                <div className="about-text">
                  <p>
                  Solana ranks among the highest performing permissionless blockchains in the world. With current iterations of the Solana Testnet, a network of 200 physically distinct nodes supports a sustained throughput of more than 50,000 transactions per second & is resistant to various types of attacks, while also having support for smart contracts written in Solidity. Within the LegioPad Network, users gain access to decentralized services while highly secured data information is safely distributed over the network and not made available to any participants.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <Services />
        </div>
      </section>
    </>
  );
};

export default About;
