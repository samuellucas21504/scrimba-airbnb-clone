import React from "react";
import "./style.css";
import fotoGrid from "../../images/fotoGrid.png";

export default function Hero() {
    return (
    <div>
        <div className="hero--image_wrapper">
            <img src={fotoGrid} alt="images grid" className="hero--image"/>
        </div>
        <div className="hero--text_wrapper">
            <h1 className="hero--article_title">Online Experiences</h1>
            <p className="hero--article">
                Join unique interactive activities led by one-of-a-kind hosts-all
                without leaving home.
            </p>
        </div>
    </div>
    )
}