import styled from "styled-components";
import Hero from "./components/Hero";
import ImagesGrid from "./components/ImagesFlex";
import Form from "./components/Form";
import { useProject } from "./contexts/ProjectProvider";

const Container = styled.div`
  background-color: var(--blue-950);
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 1100px) {
    max-height: 100vh;
  }
`;

const Wrapper = styled.div`
  background-image: linear-gradient(
      rgba(18, 23, 37, 0.7),
      rgba(18, 23, 37, 0.7)
    ),
    url("/assets/mobile/image-host.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-inline: 1.5rem;

  max-width: 90rem;
  margin-inline: auto;
  min-height: 100vh;

  @media (min-width: 600px) {
    background-image: linear-gradient(
        to right,
        rgba(84, 230, 175, 0.3),
        rgba(84, 230, 175, 0.3)
      ),
      url("/assets/tablet/image-host.jpg");
    background-size: 42rem 100%, 42rem 100%; /* Prevents the image from stretching */
    background-position: top right; /* Positions the image at the top right */
    background-repeat: no-repeat; /* Ensures the background image does not repeat */
    background-clip: border-box; /* Clips the image within the element */

    display: flex; /* If you're using flexbox, include this to apply layout properties */
    justify-content: flex-start; /* Aligns children to the start of the container */

    text-align: start;
  }

  @media (min-width: 1100px) {
    background-image: linear-gradient(
        to right,
        rgba(84, 230, 175, 0.3),
        rgba(84, 230, 175, 0.3)
      ),
      url("/assets/desktop/image-host.jpg");
    background-size: cover;
    background-position: center;
    background-size: 52rem 65%, 52rem 65%; /* Prevents the image from stretching */
    background-position: center right; /* Positions the image at the top right */
  }
`;

const Box = styled.div`
  max-width: 600px;

  @media (min-width: 600px) {
    background-color: var(--blue-950);
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3rem;
    width: 85%;
  }

  @media (min-width: 1100px) {
    width: 100vw;
    max-width: 50rem;
    padding: 5rem 6rem 6rem 6rem;
    bottom: 3rem;
  }
`;

const LogoContainer = styled.div`
  margin-inline: auto;
  margin-bottom: 3rem;

  @media (min-width: 600px) {
    height: 100vh;
    background-color: var(--blue-950);
    padding-right: 5rem;
    padding-top: 6rem; /* Adds dynamic padding based on the viewport width */
    margin-inline: 0;
    margin-right: auto;
    margin-left: 0;
  }

  @media (min-width: 1100px) {
    padding-left: 5rem;
    padding-top: 11rem;
  }
`;

const Logo = styled.img``;

const ImgPattern = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  @media (min-width: 1100px) {
    transform: none;
    transform: translateY(-110%);
  }
`;

function App() {
  const { isTablet } = useProject();

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src="/assets/logo.svg" alt="" />
        </LogoContainer>
        <ImgPattern src="/assets/bg-pattern-dots.svg" alt="" />
        <Box>
          <Hero />
          {isTablet || <ImagesGrid />}
          <Form />
          {!isTablet || <ImagesGrid />}
        </Box>
      </Wrapper>
    </Container>
  );
}

export default App;
