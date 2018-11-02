import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("clicked");
  }
  render() {
    // return React.createElement("div", { id: "my-id" }, [
    //   React.createElement(
    //     "h1",
    //     {
    //       onClick: this.handleTitleClick
    //     },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "Dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "bird",
    //     breed: "Cockatie"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Doink",
    //     animal: "Cat",
    //     breed: "Mixed"
    //   })
    // ]);
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="kiki" animal="dog" breed="cat" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
