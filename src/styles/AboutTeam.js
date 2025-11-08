import styled from "styled-components";

// Use the same breakpoint as your navbar for consistency
const desktopBreakpoint = "1024px";

export const AboutSection = styled.section`
  min-height: calc(100vh - var(--nav-height));
  /* overflow-y: hidden; */
  padding: 0rem 2rem;

  /* Mobile-first: stack everything */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Desktop layout: use grid for 1/3 + 2/3 */
  @media (min-width: ${desktopBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }
`;

export const LeftColumn = styled.div`
  width: 100%;
  /* On mobile, stack the images */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${desktopBreakpoint}) {
    position: relative;
    height: 100%;
    min-height: 500px; /* Ensure it has height for positioning */
  }
`;

export const RightColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 21rem 0;
  position: relative;
  @media (min-width: ${desktopBreakpoint}) {
    padding: 0;
  }
`;

export const ParaClipImage = styled.img`
  width: 100%;
  max-width: 500px;
  top: 4rem;
  right: 2rem;
  position: absolute;

  @media (min-width: ${desktopBreakpoint}) {
    z-index: 1005;
    width: 120%;
    position: absolute;
    top: -4rem;
    left: 0;
    margin-bottom: 0;
  }
`;

export const IndiaGateImage = styled.img`
  width: 100%;
  max-width: 300px;

  position: absolute;
  bottom: -5rem;

  @media (min-width: 540px) {
    bottom: -15rem;
  }
  @media (min-width: ${desktopBreakpoint}) {
    position: absolute;
    bottom: -4rem;
    left: 0;
    z-index: 1;
    margin-bottom: 0;
  }
`;

export const TeamImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  position: relative;

  img {
    width: 100%;
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}) {
    margin-bottom: 2rem;
    height: 400px;
    img {
      position: absolute;
      width: 100%;
      left: 50%;
      right: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
    }
  }
`;

export const PageTitle = styled.h1`
  font-family: var(--secondaryFont, "Island Moments");
  color: var(--black);
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const PortfolioButton = styled.a`
  /* Re-using your brand's button style */
  background: var(--primary-500); /* Orange */
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background: var(--primary-700);
    transform: scale(1.05);
  }
`;
