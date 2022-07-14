import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

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
    height: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    img {
      height: 200px;
      width: 100%;
      max-width: 250px;

      cursor: pointer;
    }

    form {
      overflow-y: auto;

      padding: 1%;
      gap: 1.5rem;
      width: 80%;
      max-width: 500px;

      text-align: center;

      display: flex;
      flex-direction: column;

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--white-gray);
      }

      h3 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.6rem;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

        color: var(--semi-black);
      }

      label {
        font-size: 1.2rem;
        margin-bottom: -1.3rem;
        text-align: start;
      }

      input {
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
      span {
        text-align: start;
        font-size: 1.2rem;

        color: var(--red);

        margin-top: -1.2rem;
      }

      button {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 600px) {
    .image {
      display: none;
    }
    .form {
      width: 80%;
    }
  } ;
`;
