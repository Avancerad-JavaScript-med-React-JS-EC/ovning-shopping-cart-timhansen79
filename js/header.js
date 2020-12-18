import React from "react";
import Sherlock from "../img/sherlock-holmes-147255_640.png";

function HeaderApp() {
  return (
    <header className="header">
      <img className="img" src={Sherlock} />
      <div className="cart">
        <h2>Cart</h2>
        <span>0</span>
      </div>
    </header>
  );
}

export default HeaderApp;
