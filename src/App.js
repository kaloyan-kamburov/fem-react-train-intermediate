import React from "react";
import { Router } from "@reach/router";
// import Loadable from "react-loadable";
import NavBar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";

import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

// const LoadableDetails = Loadable({
//   loader: () => import("./Details"),
//   loading() {
//     return <h1>Loading split out code ...</h1>;
//   }
// });

// const LoadableResults = Loadable({
//   loader: () => import("./Results"),
//   loading() {
//     return <h1>Loading split out code ...</h1>;
//   }
// });

// const LoadableSearchParams = Loadable({
//   loader: () => import("./SearchParams"),
//   loading() {
//     return <h1>Loading split out code ...</h1>;
//   }
// });

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
