import styled from "styled-components";

export const ProductsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  padding: 1rem;
  gap: 3rem;

  @media (min-width: 900px) {
    gap: 1rem;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    overflow: hidden;

    @media (min-width: 900px) {
      flex-flow: column-reverse;
      width: calc((100% - 3rem) / 3);
    }

    :hover {
      transform: scale(1.02);
      cursor: pointer;
      transition: transform 0.35s ease-in-out;
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 1rem;
      object-fit: cover;

      @media (min-width: 900px) {
        width: 100%;
        height: 200px;
      }
    }

    .product__info {
      display: flex;
      flex-direction: column;
      margin: 0 auto 1rem 0;
      gap: 0.25rem;
      width: calc(100% - 70px);

      @media (min-width: 900px) {
        width: auto;
      }

      h3 {
        color: var(--dark-gray);
        font-size: clamp(1.5rem, 4vw, 2rem);
        font-weight: 500;
      }

      span {
        font-size: clamp(1.25rem, 3vw, 1.5rem);
        color: var(--dark-gray);
      }
    }
  }
`;
