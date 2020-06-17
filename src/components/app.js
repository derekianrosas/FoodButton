import React, { Component } from "react";

const foodPhotos = [];

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      foodData: foodPhotos,
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
      </div>
    );
  }
}
