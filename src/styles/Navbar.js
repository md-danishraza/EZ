import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #282c34;
`;
// Use NavLink from react-router-dom with styled()
// This gives ".active" class for styling
const StyledNav = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 8px 12px;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #61dafb;
    color: #282c34;
    font-weight: bold;
  }
`;

export { Wrapper, StyledNav };
