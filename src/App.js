const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("clicked");
  }
  render() {
    return React.createElement("div", { id: "my-id" }, [
      React.createElement(
        "h1",
        {
          onClick: this.handleTitleClick
        },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockatie"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
