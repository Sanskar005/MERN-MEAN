import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="App">
      <div className="nav">
        <div className="brand"><img class="logo" src="https://content.couponspy.in/public/shop/240.jpg"></img></div>
        <div><input type="text" placeholder="Search for products,brands and more"></input></div>
        <div class="elements">
          <div class="items">Sanskar</div>
        <div class="items">Become a seller</div>
        <div class="items">More</div>
        <div class="items">Cart</div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
