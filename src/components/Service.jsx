import React from "react";

import { GiCrossedChains } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";

const ServiceContent = [
  {
    icon: <GiCrossedChains />,
    title: "Multichain Launchpad",
    descriptions: `<strong>$LEGIO</strong> will launch on BSC while supporting a wide array of multi-chain IDO’s`,
  },
  {
    icon: <GiTrophy />,
    title: "Pee 2 Earn",
    descriptions: `Battle to PEE and win`,
  },
  {
    icon: <IoIosPeople />,
    title: "Citizens DAO",
    descriptions: `Your rank in the army will dictate your voting power`,
  },
  {
    icon: <MdCollectionsBookmark />,
    title: "NFT Drop Platform",
    descriptions: `Collect your battle cards`,
  },
  {
    icon: <MdVerifiedUser />,
    title: "Virtual Colosseum",
    descriptions: `Seats that could be used for virtual events or for rental`,
  },
  {
    icon: <RiHandCoinFill />,
    title: "Legio Rations",
    descriptions: `Those who help conquer will be rewarded`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        <div className="title">
          <h3>Our Weapons</h3>
        </div>
        {ServiceContent.map((val, i) => (
          <div className="col-sm-12 col-md-4" key={i}>
            <div className="feature-box shadow">
              <div>
                {val.icon}
                <h5>{val.title}</h5>
                <p dangerouslySetInnerHTML={{ __html: val.descriptions }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
