import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  transition: transform 0.4s ease-in-out;

  width: auto;

  :hover {
    transform: scale(1.05);
  }

  :active {
    border-radius: 10px;
    border: 1px solid gold;
  }

  ${(props) => {
    switch (props.isVisible) {
      case true:
        return css`
          visibility: visible;

          position: relative;
        `;

      default:
        return css`
          visibility: hidden;

          position: absolute;
        `;
    }
  }}
`;
export const InputContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;

  .search-icon {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 20%;
    padding-left: 1rem;
    box-sizing: content-box;
  }

  input {
    color: var(--gray);
    background-color: #ebedef;

    width: 100%;
    height: 45px;

    padding: 1rem 1.5rem;
    border-radius: 5px;

    @media (min-width: 900px) {
      width: clamp(35vw, 35vw, 45vw);
      padding: 1rem 1.5rem 1rem 6rem;
    }
  }
`;
