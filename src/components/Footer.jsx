import React from "react";
import { FaTwitter, FaTelegramPlane, FaBullhorn } from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/metaplayio" },
  { Social: <FaTelegramPlane />, link: "https://t.me/MetaPlayVerified" },
  { Social: <FaBullhorn />, link: "https://t.me/MetaPlayAnn" },
];

const Footer = () => {
  return (
    <footer className="footer pt-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 my-2">
            <div className="nav justify-content-center justify-content-md-start">
              {SocialShare.map((val, i) => (
                <a
                  key={i}
                  href={`${val.link}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {val.Social}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-6 my-2 text-center text-md-end">
            <p>
              © {new Date().getFullYear()} copyright LegioPad all rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
