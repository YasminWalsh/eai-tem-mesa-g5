import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;
  max-width: 500px;
  width: 100%;
  padding: 1rem;

  div:first-child {
    display: flex;
    justify-content: center;
    width: 100%;

    cursor: pointer;
    > img {
      width: 55%;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  }

  .containerButton {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
    gap: 2rem;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 0.1rem;
      width: 45%;
      height: 45%;

      border-color: var(--blue);
      color: var(--dark-blue);

      font-size: 1.1rem;

      &:hover {
        box-shadow: 0px 0px 0.2em 1px var(--dark-blue);
      }

      div {
        width: 100%;
        height: 50%;
        img {
          width: 50%;
        }
      }
    }
  }
`;
