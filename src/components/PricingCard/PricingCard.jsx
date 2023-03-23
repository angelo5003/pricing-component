import React from "react";
import "./PricingCardStyle.css";

const PricingCard = ({ card }) => {
  return (
    <article className="card_outer_container">
      <div className="card_inner_container">
        <p className="card_title">{card.title}</p>
        <h1 className="card_price">&#36; {card.monthly}</h1>
        <ul className="card_list_container">
          <li className="card_list_item">{card.storage}</li>
          <li className="card_list_item">{card.users}</li>
          <li className="card_list_item">{card.upload}</li>
        </ul>
        <button className="card_btn">{card.learn}</button>
      </div>
    </article>
  );
};

export default PricingCard;
