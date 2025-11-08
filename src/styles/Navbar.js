import styled from "styled-components";
import { NavLink } from "react-router-dom";

// --- BREAKPOINTS ---
// Use panel for mobile and tablet
const breakpointLarge = "1024px";
const navHeight = "70px";

// --- 1. Main Header ---
export const NavHeader = styled.header`
  position: fixed;
  top: 0.5rem;
  left: 0;
  width: 100%;
  height: ${navHeight};
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.5);

  /* Making header the top layer */
  z-index: 1001;
`;

export const LogoWrapper = styled(NavLink)`
  display: block;
  z-index: 1002;
  img {
    height: 40px;
    width: auto;
    display: block;
  }
`;

const BaseToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const ToggleOpenButton = styled(BaseToggleButton)``;
export const ToggleCloseButton = styled(BaseToggleButton)``;

// --- 2. Desktop Menu ---

export const DesktopMenu = styled.div`
  display: none;

  /* Only show on large screens */
  @media (min-width: ${breakpointLarge}) {
    display: flex;
    align-items: center;
    gap: 2rem;

    position: fixed;
    top: 0.5rem;
    right: 5rem;
    height: ${navHeight};

    z-index: 1001;

    transition: transform 0.5s ease-in-out;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(120%)"};
  }
`;

export const NavLinksGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DesktopNavLink = styled(NavLink)`
  font-family: var(--secondaryFont, "Montserrat");
  color: var(--black);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: var(--transition);
  white-space: nowrap;

  &:hover {
    color: var(--primary-500);
  }

  &.active {
    color: var(--primary-500);
    border-bottom: 2px solid var(--primary-500);
  }
`;

// --- 3. Mobile/Tablet Panel ) ---

export const NavPanel = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  /* background: rgba(255, 255, 255, 0.9); */
  background-color: var(--primary-50);
  backdrop-filter: blur(10px);

  /* Place panel *behind* the header */
  z-index: 1000;

  padding: 6rem 2rem 2rem 3rem;

  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};

  /* Hide panel only on large screens */
  @media (min-width: ${breakpointLarge}) {
    display: none;
  }
`;

export const MobileNavLink = styled(NavLink)`
  font-family: var(--secondaryFont, "Montserrat");
  color: var(--black);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.75rem 0;
  transition: var(--transition);

  &:hover {
    color: var(--primary-500);
  }

  &.active {
    color: var(--primary-5or00);
  }
`;

// --- 4. Button ---

export const LetsTalkButton = styled(NavLink)`
  background: var(--primary-500);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-family: var(--Primary);
  font-weight: 700;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  span {
    font-size: 1.1rem;
  }

  &:hover {
    background: var(--primary-700);
    transform: scale(1.05);
  }

  ${({ $isDesktop }) =>
    !$isDesktop &&
    `
    margin-top: 2rem;
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
  `}
`;
