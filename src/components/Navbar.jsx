import React, { useState } from "react";

// Import assets
import logo from "../assets/navbar/Logo.png";
import menuBar from "../assets/navbar/MenuBar.png";
import menuClose from "../assets/navbar/MenuClose.png";

// Import styled components
import {
  // Layout
  NavHeader,
  DesktopMenu,
  NavPanel,

  // Elements
  LogoWrapper,
  NavLinksGroup,
  DesktopNavLink,
  MobileNavLink,
  LetsTalkButton,

  // Toggles
  ToggleOpenButton,
  ToggleCloseButton,
} from "../styles/Navbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Closes menu when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ============================= */}
      {/* 1. MAIN HEADER (ALWAYS VISIBLE) */}
      {/* ============================= */}
      <NavHeader>
        <LogoWrapper to="/" onClick={closeNav}>
          <img src={logo} alt="Company Logo" />
        </LogoWrapper>

        {/* The single toggle button that changes based on state */}
        {isOpen ? (
          <ToggleCloseButton onClick={toggleNav}>
            <img src={menuClose} alt="Close Menu" />
          </ToggleCloseButton>
        ) : (
          <ToggleOpenButton onClick={toggleNav}>
            <img src={menuBar} alt="Open Menu" />
          </ToggleOpenButton>
        )}
      </NavHeader>

      {/* ===================================== */}
      {/* 2. DESKTOP MENU (SLIDES IN, > 768px)  */}
      {/* ===================================== */}
      <DesktopMenu $isOpen={isOpen}>
        <NavLinksGroup>
          <DesktopNavLink to="/services" onClick={closeNav}>
            Services
          </DesktopNavLink>
          <DesktopNavLink to="/about-team" onClick={closeNav}>
            Their Stories
          </DesktopNavLink>
          <DesktopNavLink to="/about-us" onClick={closeNav}>
            Our Story
          </DesktopNavLink>
          <DesktopNavLink to="/portfolio" onClick={closeNav}>
            Varnan
          </DesktopNavLink>
        </NavLinksGroup>

        <LetsTalkButton to="/contact" $isDesktop={true} onClick={closeNav}>
          Let's Talk <span>&#x2709;</span>
        </LetsTalkButton>
      </DesktopMenu>

      {/* =================================== */}
      {/* 3. MOBILE PANEL (SLIDES IN, < 768px) */}
      {/* =================================== */}
      <NavPanel $isOpen={isOpen}>
        {/* Note: The close button is in the NavHeader now, so we remove it from here */}

        <MobileNavLink to="/" onClick={closeNav}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/services" onClick={closeNav}>
          Services
        </MobileNavLink>
        <MobileNavLink to="/about-team" onClick={closeNav}>
          Their Stories
        </MobileNavLink>
        <MobileNavLink to="/about-us" onClick={closeNav}>
          Our Story
        </MobileNavLink>
        <MobileNavLink to="/portfolio" onClick={closeNav}>
          Varnan
        </MobileNavLink>

        <LetsTalkButton to="/contact" onClick={closeNav}>
          Let's Talk <span>&#x2709;</span>
        </LetsTalkButton>
      </NavPanel>
    </>
  );
}

export default Navbar;
