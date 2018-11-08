import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="kiki" animal="dog" breed="cat" />
        <Pet name="ki1ki" animal="dsssog" breed="ca2t" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
