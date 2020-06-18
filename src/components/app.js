import React, { Component } from "react";
import { Redirect } from "react-router";
import burger from "../../static/assets/SGB.png";
import taco from "../../static/assets/SGT.jpg";
import steak from "../../static/assets/SGC.jpg";
import spaghetti from "../../static/assets/SGS.jpg";

const foodPhotos = [{ Type: "Burger", image: burger }];

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      foodData: foodPhotos,
      selectedPhoto: "",
    };
  }
  showFoodPhotoTaco = () => {
    this.setState();
  };

  render() {
    return (
      <div className="app">
        <button>Do you like Tacos?</button>
        <button>Do you like Burgers?</button>
        <button>Do you like Spaghetti?</button>
        <button>Do you like Steak?</button>
        <img src={this.state.foodData[0].image}></img>
        <img src={this.state.foodData[1].image}></img>
        <img src={this.state.foodData[2].image}></img>
        <img src={this.state.foodData[3].image}></img>
      </div>
    );
  }
}
