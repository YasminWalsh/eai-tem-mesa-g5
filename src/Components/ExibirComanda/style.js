import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  max-width: 400px;
  width: 100%;
  padding: 1rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-top: 2px solid var(--white);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-color: var(--white);

    padding: 2rem;

    .containerHeaderModal {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;

      > div:first-child {
        width: 60%;
        gap: 1rem;

        justify-content: flex-start;
        align-items: center;
        display: flex;
        flex-direction: row;

        img {
          height: 40px;
        }

        p {
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 1.5rem;

          color: var(--dark-gray);
        }
      }
      > button {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;

        color: var(--dark-gray);

        padding: 1rem;
      }
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem;

  border-bottom: 2px solid var(--white);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: var(--white);

  .boxInfosComanda {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    gap: 1rem;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.5rem;

      color: var(--dark-gray);
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.5rem;

      color: var(--dark-gray);
    }
  }

  button {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;

    padding: 1rem;
    width: 100%;
  }
`;
