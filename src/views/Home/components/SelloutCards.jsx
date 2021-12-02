import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "https://trung-img-server.herokuapp.com/61a83bff43a0b417dd6abfa2",
      title: "Best Prices",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      image: "https://trung-img-server.herokuapp.com/61a83c6243a0b417dd6abfa5",
      title: "Fast delivery",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      image: "https://trung-img-server.herokuapp.com/61a83c7a43a0b417dd6abfa8",
      title: "Free Returns",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img
            className="sellout-icon"
            src={card.image}
            alt="Fila Back"
          />
          <div className="mt-3 text-center">
            <h5 className="sellout-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
    </div>
  );
};

export default SelloutCards;
