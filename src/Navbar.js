import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const Container = styled("header")`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBar = () => (
  <Container>
    <Link to="/">Adopt me!</Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        Search
      </span>
    </Link>
  </Container>
);

export default NavBar;
