import React from "react";
import { Wrapper, StyledNav } from "../styles/Navbar";

function Navbar() {
  return (
    <Wrapper>
      <StyledNav to="/">Home</StyledNav>
      <StyledNav to="/about-team">About Team</StyledNav>
      <StyledNav to="/about-us">About Us</StyledNav>
      <StyledNav to="/services">Services</StyledNav>
      <StyledNav to="/portfolio">Portfolio</StyledNav>
      <StyledNav to="/contact">Contact</StyledNav>
    </Wrapper>
  );
}

export default Navbar;
