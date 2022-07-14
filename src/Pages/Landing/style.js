import styled from "styled-components";
import { motion } from "framer-motion";

export const LandingContainer = styled(motion.div)`
  width: 100vw;
  height: ${(props) => props.height};
`;

export const LandingDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: 10px;
  flex-direction: ${(props) => props.direction};
  margin-top: ${(props) => props.mTop};

  button {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const CenteredLandingDiv = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || "column"};
  @media screen and (min-width: 820px) {
    flex-direction: ${(props) => props.direction || "row"};
    gap: 1rem;
  }

  button {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const MainText = styled.h2`
  text-align: justify;
  letter-spacing: -0.08em;
  color: #202225;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export const SecondaryText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  letter-spacing: -0.08em;
  color: #202225;

  transition: 0.5s;

  &:hover {
    color: var(--blue);
  }
`;

export const LandingLogo = styled(motion.img)`
  width: 220px;
  height: 200px;
  margin-bottom: -45px;
`;

export const LandingCard = styled(motion.div)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
  padding: 2rem;
  @media screen and (min-width: 820px) {
    height: 600px;
  }
`;

export const LandingFooter = styled.div`
  width: 100%;
  height: 305px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
