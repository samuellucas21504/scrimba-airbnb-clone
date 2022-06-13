import React from "react";
import "./style.css";
import airbnbLogo from "../../images/airbnbLogo.png";

export default function Navbar() {
    return (
        <nav className="nav--wrapper">
            <p><img src={airbnbLogo} alt="airBNB logo" className="nav--logo" /></p>
        </nav>
    )
}