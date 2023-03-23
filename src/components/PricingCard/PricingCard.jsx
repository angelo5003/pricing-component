import React from "react";
import "./PricingCardStyle.css";

const PricingCard = ({ card }) => {
  return (
    <article
      className="card_outer_container"
      style={{ background: card.backgroundColor }}
    >
      <div className="card_inner_container">
        <p className="card_title" style={{ color: card.titleColor }}>
          {card.title}
        </p>
        <h1 className="card_price" style={{ color: card.titleColor }}>
          &#36; {card.monthly}
        </h1>
        <ul className="card_list_container">
          <li className="card_list_item" style={{ color: card.cardItemColor }}>
            {card.storage}
          </li>
          <li className="card_list_item" style={{ color: card.cardItemColor }}>
            {card.users}
          </li>
          <li className="card_list_item" style={{ color: card.cardItemColor }}>
            {card.upload}
          </li>
        </ul>
        <button
          className="card_btn"
          style={{
            background: card.buttonBackgroundColor,
            color: card.buttonColor,
          }}
        >
          {card.learn}
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
