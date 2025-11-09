import styled from "styled-components";

const desktopBreakpoint = "1024px";

export const AboutSection = styled.section`
  position: relative;

  /* min-height: calc(100vh - var(--nav-height)); */
  /* min-height: 85vh; */
  min-height: 100vh;
  overflow: hidden;
  padding: 0rem 1rem;
  width: 100%;
  margin-top: 4rem;

  overflow-x: hidden;

  /* Mobile-first: stack columns */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  /* Desktop: 2-column grid */
  @media (min-width: ${desktopBreakpoint}) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1rem;
  }
`;

// Helper for columns to sit on top of the mountain
const BaseColumn = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${desktopBreakpoint}) {
    align-items: flex-start;
  }
`;

export const LeftColumn = styled(BaseColumn)`
  text-align: center;
  padding-top: 5rem;
  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 0;
    justify-content: center;
    align-items: center;
    align-self: center;
    /* text-align: left; */
  }
`;

export const RightColumn = styled(BaseColumn)`
  text-align: center;
  padding-top: 0;
  /* align-self: center; */

  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 1rem;
    text-align: center;
  }
`;

export const SmallTitle = styled.h2`
  font-family: var(--secondaryFont, "Montserrat");
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.5rem;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-family: var(--bodyFont, "Roboto");
  line-height: 1.75;
  font-size: 0.8rem;
  color: var(--grey-800);
  max-width: 30em;
  margin-bottom: 2rem;
  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1rem;
  }
`;

export const StatsImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;

  @media (min-width: ${desktopBreakpoint}) {
  }
`;

export const LargeTitle = styled.h1`
  font-family: var(--headingFont, "Island Moments");
  font-size: 2rem;
  /* This color is from your hero section title */
  color: #3f476a;
  line-height: 1.3;
  font-weight: 500;
  text-align: center;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 2.5rem;
  }
`;

export const MountainImage = styled.img`
  /* This is the magic */
  position: relative;
  width: 100%;
  height: auto;

  /* CRITICAL: Sits behind the text columns */
  z-index: 1;

  /* Prevents user from selecting the image */
  pointer-events: none;

  /* Ensures it scales from the bottom */
  object-fit: cover;
  object-position: bottom;

  @media (min-width: ${desktopBreakpoint}) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    left: auto;
    width: 50%;
  }
`;
