import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import colors from "./colors";
import { keyframes } from "@emotion/core";

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${spin} infinite;
`;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }

  span {
    display: inline-block;
    border: 1px solid red;
    color: red !important;
  }
`;

const NavBar = () => (
  <Container>
    <NavLink to="/">Adopt me!</NavLink>
    <NavLink to="/search-params">
      <SpyGlass frequency={5} aria-label="search" role="img">
        Search
      </SpyGlass>
    </NavLink>
  </Container>
);

export default NavBar;
