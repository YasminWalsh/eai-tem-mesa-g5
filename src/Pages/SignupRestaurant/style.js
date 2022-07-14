import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .react-select-container {
    background-color: aliceblue;
    height: 700px;
  }

  .react-select__control {
    border-radius: 10px;

    padding: 1rem;
    padding-bottom: -0.5rem;

    background: var(--white-gray);

    ::placeholder {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 22px;
    }

    .react-select__value-container {
      margin-top: -0.5rem;

      .react-select__placeholder {
        display: none;
      }

      .react-select__multi-value {
        line-height: 22px;
        text-align: start;
        /* border-radius: 50%; */
        border-radius: 4px;
        color: var(--white);
        background-color: var(--blue);

        .react-select__multi-value__label {
          color: var(--white);
          background-color: var(--blue);
          font-weight: 300;
          font-size: 1rem;
          /*  border-bottom-left-radius: 20px;
          border-top-left-radius: 20px; */
        }

        .react-select__multi-value__remove {
          /* border-bottom-right-radius: 20px;
          border-top-right-radius: 20px; */
          font-weight: 300;
          font-size: 1rem;
          background-color: var(--blue);
          cursor: pointer;

          &:hover {
            z-index: 1;
            background-color: var(--white-gray);
            border: 1px solid var(--blue);

            color: var(--blue);
          }
        }
      }

      .react-select__input-container {
        display: none;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: hidden;
  .image {
    width: 50%;
    height: 100%;

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .form {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 250px;
      width: 60%;
      max-width: 250px;

      cursor: pointer;
    }

    form {
      padding: 2rem;
      gap: 1.5rem;

      width: 100%;
      max-width: 500px;

      text-align: center;

      display: flex;
      flex-direction: column;

      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 25px;

        background: var(--white-gray);
      }

      h3 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 3.6rem;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

        color: var(--semi-black);
      }

      label {
        font-size: 1.2rem;
        margin-bottom: -1.3rem;
        text-align: start;
      }

      input,
      select {
        border-radius: 10px;

        height: 49px;
        padding: 1.5rem;

        background: var(--white-gray);

        ::placeholder {
          font-weight: 300;
          font-size: 1.5rem;
          line-height: 22px;
        }
      }

      select {
        padding: 1rem;
        font-size: 1.5rem;
        color: var(--gray);
      }

      button {
        font-size: 1.2rem;
        font-weight: 500;
      }
      > span {
        text-align: start;
        color: var(--red);
        font-size: 1rem;

        margin-top: -0.9rem;
      }
    }
  }

  @media (max-width: 600px) {
    .image {
      display: none;
    }
    .form {
      width: 80%;

      form {
        padding: 0;
      }
    }
  } ;
`;
