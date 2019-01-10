import React from "react";
import { Link } from "@reach/router";

const NavBar = () => (
  <header>
    <Link to="/">Adopt me!</Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        Search
      </span>
    </Link>
  </header>
);

export default NavBar;
