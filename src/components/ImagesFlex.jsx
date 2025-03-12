import styled from "styled-components";

const StyledImagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  margin-block: 2rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 1100px) {
    justify-content: start;
    gap: 2rem;
    margin-top: 4rem;
  }
`;

const Image = styled.img`
  filter: invert(40%) sepia(11%) saturate(1323%) hue-rotate(188deg)
    brightness(94%) contrast(90%);
`;

function ImagesGrid() {
  return (
    <StyledImagesGrid>
      <Image src="/assets/spotify.svg" alt="" />
      <Image src="/assets/apple-podcast.svg" alt="" />
      <Image src="/assets/google-podcasts.svg" alt="" />
      <Image src="/assets/pocket-casts.svg" alt="" />
    </StyledImagesGrid>
  );
}

export default ImagesGrid;
