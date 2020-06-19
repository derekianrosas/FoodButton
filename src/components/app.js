import React, { Component } from "react";
import { Redirect } from "react-router";
import burger from "../../static/assets/SGB.png";
import taco from "../../static/assets/SGT.jpg";
import steak from "../../static/assets/SGC.jpg";
import spaghetti from "../../static/assets/SGS.jpg";

const foodPhotos = [
  { Type: "Burger", image: burger },
  { Type: "Taco", image: taco },
  { Type: "Steak", image: steak },
  { Type: "Spaghetti", image: spaghetti },
];

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      foodData: foodPhotos,
      Type: "",
    };
  }

  render() {
    return (
      <div className="app">
        <button style={{ backgroundColor: "#FFD6EF" }}>Tacos?</button>
        <button style={{ backgroundColor: "#DBB9EB" }}>Burgers?</button>
        <button style={{ backgroundColor: "#E6E1FE" }}>Spaghetti?</button>
        <button style={{ backgroundColor: "#B3C9F5" }}>Steak?</button>
        <img
          src={this.state.foodData[0].image}
          style={{ visibility: "hidden" }}
        ></img>
        <img
          src={this.state.foodData[1].image}
          style={{ visibility: "hidden" }}
        ></img>
        <img
          src={this.state.foodData[2].image}
          style={{ visibility: "hidden" }}
        ></img>
        <img
          src={this.state.foodData[3].image}
          style={{ visibility: "hidden" }}
        ></img>
      </div>
    );
  }
}
