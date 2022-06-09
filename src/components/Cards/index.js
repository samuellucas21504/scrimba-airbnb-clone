import React from "react";
import Card from "./Card";
import "./style.css";
import data from "../../mockups/data";

export default function Cards() {
  const cardData = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return <div className="cards">{cardData}</div>;
}
