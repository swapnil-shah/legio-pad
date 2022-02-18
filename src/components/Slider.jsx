import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "LegioPad",
  description: `The smell of the sand, the roar echoing throughout the Colosseum, welcome to our Legio. We fight as one to host the best IDOs in Crypto.`,
  btnText: "Take your seat",
};

const Slider = () => {
  return (
    <>
      <section id="home" className="home-banner">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <div className="type-box">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Multichain Launchpad</p>
                    <p className="loop-text lead">Pee 2 Earn</p>
                    <p className="loop-text lead">Citizens DAO</p>
                    <p className="loop-text lead">NFT Drop Platform</p>
                    <p className="loop-text lead">Virtual Colosseum</p>
                    <p className="loop-text lead">Legio Rations</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <a
                    className="px-btn px-btn-dark"
                    href="https://pancakeswap.finance/swap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overlay"></div>

        <div
          className="hb-me"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="600"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
