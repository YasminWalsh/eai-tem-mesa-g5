import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;

  @media (min-width: 900px) {
    //position: sticky;
    //
    //top: 0;
    width: 100%;

    box-shadow: inset 0 -1px 0 #dcdcdc;
  }

  .header-wrapper {
    background: #fff;

    margin: auto;

    z-index: 9997;

    border-top: none;
    border-bottom: 1px solid #f7f7f7;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem;

    @media (min-width: 900px) {
      justify-content: space-evenly;
      gap: 2rem;
    }
  }

  svg {
    width: 5rem;
    height: auto;
  }

  .logo-container {
    display: flex;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }

  .logo-container > img {
    width: 100px;
    height: 70px;
  }

  button {
    padding: 1rem;
    width: 85px;
    height: 35px;

    font-size: 1.1rem;

    :active {
      transform: scale(1.2);
      color: var(--blue);
    }
  }

  .user-container {
    min-width: 100px;
    max-width: 400px;
    margin: 0 auto;
    justify-content: flex-end;
    display: flex;
    cursor: pointer;

    > div:first-child {
      display: flex;
    }
  }
  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    font-weight: 500;

    padding: 1rem;
  }
`;
