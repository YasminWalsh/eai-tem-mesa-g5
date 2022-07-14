import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  max-width: 400px;
  width: 100%;

  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-top: 2px solid var(--white);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    background-color: var(--white);

    padding: 1rem;

    > img {
      width: 60%;
      height: 170px;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      p {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;

        color: var(--dark-gray);
      }

      button {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;

        color: var(--dark-gray);

        padding: 1rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;

  border-bottom: 2px solid var(--white);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: var(--white);

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;

    color: var(--dark-gray);

    margin-top: -1rem;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: -1rem;
    text-align: start;
  }
  input {
    border-radius: 10px;

    padding: 1.5rem;

    background: var(--white-gray);

    ::placeholder {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 22px;
    }

    &:focus {
      border: 2px solid var(--dark-blue);
    }
  }

  button {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;

    padding: 1rem;
  }
`;
