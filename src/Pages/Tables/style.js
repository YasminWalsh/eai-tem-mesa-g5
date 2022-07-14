import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;
  padding: 1rem;

  > p {
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    text-decoration: underline;
    color: var(--dark-blue);
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 55%;

      cursor: pointer;
    }

    > button {
      font-size: 1.2rem;

      padding: 0.5rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    }
    button {
      font-size: 1.2rem;
      padding: 0.8rem;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    li {
      width: calc((100% - 8em) / 5);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;

      border: 1px solid var(--blue);
      border-radius: 4px;

      color: var(--dark-blue);
      font-size: 1.5rem;
      font-weight: 500;

      &:hover {
        box-shadow: 0px 0px 0.2em 1px var(--dark-blue);
      }

      > div:first-child {
        width: 100%;
        > img {
          width: 100%;
          height: 200px;
          border-radius: 10px;
        }
      }
    }

    @media (max-width: 950px) {
      li {
        width: calc((100% - 6em) / 4);
      }
    }

    @media (max-width: 750px) {
      li {
        width: calc((100% - 4em) / 3);
      }
    }

    @media (max-width: 570px) {
      li {
        width: 100%;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-evenly;

        > img {
          width: 45%;
          height: 110px;
          border-radius: 10px;
        }

        .boxInfos {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-evenly;
        }
      }
    }
  }
`;
