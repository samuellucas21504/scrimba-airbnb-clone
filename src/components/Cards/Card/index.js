import React from "react";
import "./style.css";
import starIcon from "../../../images/star.png";

export default function Card(props) {
  console.log(props.card);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="post">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} alt="Card" />
      </div>
      <div className="card--information">
        <div className="card--ratings">
          <img src={starIcon} alt="Star" />
          {props.stats.rating}
          <div className="faded_text">
            ({props.stats.reviewCount}) • {props.location}
          </div>
        </div>
        <div className="card--instructor_name">{props.title}</div>
        <div className="card--cost">
          <span className="bold_text">From ${props.price}</span> / person
        </div>
      </div>
    </div>
  );
}
