import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router/lib/history";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    alert("dsa");
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
