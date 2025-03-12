import styled from "styled-components";
import { useProject } from "../contexts/ProjectProvider";

const Title = styled.h1`
  color: var(--white);
  font-weight: 100;
  text-transform: uppercase;
  line-height: 1.25;
  margin-bottom: 1rem;

  & span {
    color: var(--green);
  }

  @media (min-width: 700px) {
    font-size: 2.75rem;
  }
`;

const Description = styled.p`
  color: var(--blue-300);
  font-weight: 100;
  line-height: 1.5;

  @media (min-width: 700px) {
    max-width: 40ch;
    margin-block: 0.5rem;
  }

  @media (min-width: 1100px) {
   font-size: 1.15rem;
   margin-top: 1rem;
  }
`;

function Hero() {
  const { isDesktop } = useProject();

  return (
    <div>
      {isDesktop ? (
        <Title>
          <span>Publish your podcasts</span>
          <br></br>
          everwhere.
        </Title>
      ) : (
        <Title>
          <span>
            Publish your<br></br> podcasts
          </span>{" "}
          everwhere.
        </Title>
      )}
      <Description>
        Upload your audio to Pod with a single click. We'll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </Description>
    </div>
  );
}

export default Hero;
