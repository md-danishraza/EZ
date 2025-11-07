import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

// This is just like the main navbar, but for our sub-menu
const ServiceNav = styled.nav`
  display: flex;
  gap: 1rem;
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ServiceLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;

const ServicesLayout = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <p>Select a service to learn more.</p>

      {/* Sub-navigation for nested routes */}
      <ServiceNav>
        <ServiceLink to="/services/film-production">
          Film Production
        </ServiceLink>
        <ServiceLink to="/services/branding">Branding</ServiceLink>
        <ServiceLink to="/services/art-curation">Art Curation</ServiceLink>
      </ServiceNav>

      {/* This is where the nested child component will be rendered */}
      <Outlet />
    </div>
  );
};

export default ServicesLayout;
