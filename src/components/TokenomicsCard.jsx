import React from "react";

const tokenomicsData = [
  {
    name: "Total Supply	",
    number: "100,000,000",
    subtitle: null,
  },
  {
    name: "Launch Supply",
    number: "430,000",
    subtitle: null,
  },
  {
    name: "Launch Price",
    number: "$2",
    subtitle: null,
  },
  {
    name: "Token Symbol",
    number: "$LEGIO",
    subtitle: null,
    ticker: true,
  },
  {
    name: "Initial Market Cap",
    number: "TBA",
    subtitle: null,
  },
];

const TokenomicsCard = () => {
  return (
    <>
      <div className="row">
        {tokenomicsData.map((item, i) => (
          <div className="tokenomics-card col-md-4" key={i}>
            <div className="count-inner">{item.number}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TokenomicsCard;
